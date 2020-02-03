import React, { Component } from "react";
import api from "Api";
import { useRouter } from 'next/router';
import Link from 'next/link';
class MegaTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stage: 0,
      AllMakeSource : [{
        name: 'All',
        description : 'All model in the Venture Cars '
      }],
      AllModelSource: [],
      ModelLoading : true
    }
  }

  async componentDidMount() {
    //component will mount with an empty state this.state... After mounting, we populate the state with data from AllMakeSource
    let AllMakeSource = [...this.state.AllMakeSource]
    try {
      const Make = await api.get(`http://157.230.248.96:3001/api/products/getMake`);
      const MakeSource = Make.data.fields
      const Model = await api.get(`http://157.230.248.96:3001/api/products/getModel`);
      const Tags = await api.get(`http://157.230.248.96:3001/api/tags/getAllTags`);
      const ModelSource = Model.data.fields
      this.setState({AllModelSource: ModelSource, AllMakeSource: AllMakeSource.concat(MakeSource), ModelLoading: false})
    } catch (e){
      this.setState({AllModelSource: [], AllMakeSource: [], ModelLoading: false})
    }
  }

  //onclick 0 show All Model, > 1 show SpecificMakeModel
  _HandleMake = async (index) => {
    await this.setState({stage: index, ModelLoading: true})
    let AllModelSource = []
    if(index == 0){
      const Model = await api.get(`http://157.230.248.96:3001/api/products/getModel`);
      AllModelSource = await Model.data.fields
    } else {
      let AllMakeSource = this.state.AllMakeSource[index]
      AllModelSource = await this._RenderSpecificModelCategory(AllMakeSource.id)
    }
    await this.setState({ModelLoading: false, AllModelSource: AllModelSource})
  }
  async _RenderSpecificModelCategory(value) {
    try {
        const ModelSource = await api.get(`http://157.230.248.96:3001/api/categories/${value}/category`);
        return ModelSource.data
    } catch (e) {
        console.log(e)
    }
  }

  _RenderMake = () => {
    return (
      this.state.AllMakeSource.map((make, index) => {
        const stage = this.state.stage
        let style = {padding: '10px'}
        if(stage == index){
          style = {borderBottom: '3px solid #F29D30', color:'#F29D30',padding: '10px'}
        }
        return (
          // All BMW Honda ...
          <div key={index} style={style} onClick={() => this._HandleMake(index)}>
              {make.name} 
          </div>
        )
      })
    )
  }
  _RenderModel = () => {
    var modelImage = {
      objectFit: 'cover',
      borderRadius: '20px',
      // wdith: '150px',
      height: '100px',
      padding: "5px"
    };
     
    return (  
      this.state.AllModelSource.map((model, index) => {            
        return (
          <Link key={index} href="/model/[id]" as={`/model/${(model.id).replace(/ /g,"-")}`}>  
              <div className="col-3 my-2 px-2"> 
                {
                  model.files.map(image => { 
                    return ( 
                      <Link key={index} href="/model/[id]" as={`/model/${(model.id).replace(/ /g,"-")}`}> 
                        <img style={modelImage} src={image.path} />
                      </Link>
                      )
                  } )
                }
                <Link key={index} href="/model/[id]" as={`/model/${(model.id).replace(/ /g,"-")}`}> 
                  {model.name}
                </Link>
              </div>    
          </Link>             
        )      
      })
    )
  }

  render() {
    return (  <div className="text-uppercase">
      <ul className="nav nav-tabs">  
              {this.state.AllMakeSource.length > 0 &&
                  this._RenderMake()
              }
      </ul> 
      <div className="tab-content">       
              {!this.state.ModelLoading &&
                <div>
                  {this.state.AllModelSource.length > 0 &&
                    <div className="tab-pane row">  
                        {this._RenderModel()}
                    </div>  
                  }
                  {this.state.AllModelSource.length == 0 &&
                    <div className="tab-pane row">
                      No Model Found
                    </div>     
                  }
                </div>
              }
              {this.state.ModelLoading &&
                <div>
                  Loading ....
                </div>
              }
      </div>          
  </div>) 
  }
}
export default MegaTab;
