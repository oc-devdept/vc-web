import React, { useState, useEffect } from "react";
import api from "Api";

import { useRouter } from 'next/router';
import Link from 'next/link';


const MegaTab = () => {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     stage: 0,
  //     AllMakeSource : [{
  //       name: 'All',
  //       description : 'All model in the Venture Cars '
  //     }],
  //     AllModelSource: [],
  //     ModelLoading : true,
  //     AllSource: []
  //   }
  // }

  // http://localhost:3001/api/categories/getMegaMenu
  const [MegaMenu, setMegaMenu] = useState([]);
  const [Stage, setStage] = useState(0);
  const [Loading, setLoading] = useState(false);

  useEffect(() => {
      async function fetchData() {
          const result = await api.get(`categories/getMegaMenu`);
          setMegaMenu(() => Object.entries(result.data.fields))
          setLoading(() => false)
      }
      fetchData();
  }, []);

  const _RenderModel = () => {
    var modelImage = {
      objectFit: 'cover',
      borderRadius: '20px',
      height: '100px',
      padding: "5px"
    };
     
    const AllModels = MegaMenu[Stage]
    
    return(
      AllModels[1].map((model, index) => {   
        return (
          <Link key={index} href="/model/[id]" as={`/model/${(model.id).replace(/ /g,"-")}`}>  
              <div className="col-3 my-2 px-2"> 
                {model.files.map(image => { 
                    return ( 
                      <Link key={index} href="/model/[id]" as={`/model/${(model.id).replace(/ /g,"-")}`}> 
                        <img style={modelImage} src={image.path} />
                      </Link>
                      )
                })}
                <Link key={index} href="/model/[id]" as={`/model/${(model.id).replace(/ /g,"-")}`}> 
                  {model.name}
                </Link>
              </div>    
          </Link>             
        )      
      })
    )
  }


  const _RenderAllItems = () => {
  
    return (
      MegaMenu.map((e, index) =>{
        const key = e[0]
        const stage = Stage
        let style = {padding: '10px'}
        if(stage == index){
          style = {borderBottom: '3px solid #F29D30', color:'#F29D30',padding: '10px'}
        }
        
        return (
          // All BMW Honda ...
          <div key={index} style={style} onClick={() => _HandleItem(index)}>
              {key} 
          </div>
        )
      })
    )
  }

  const _HandleItem = async (index) => {
    setStage(()=> index )
  }

  
  return (  
    <div className="text-uppercase">

      {/* <ul className="nav nav-tabs">  
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
      </div>  */}

      {Loading && 
        <div>
          Loading ....
        </div>
      }

      {!Loading &&
        <>
          <ul className="nav nav-tabs">  
            {_RenderAllItems()}
          </ul> 

          <div className="tab-content">
            {MegaMenu.length > 0 &&
              <div className="d-flex">  
                    {_RenderModel()}
              </div> 
            }
          </div>

        </>
      }
  
    </div>
  ) 
  
}

export default MegaTab;
