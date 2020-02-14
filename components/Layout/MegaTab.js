import React, { useState, useEffect } from "react";
import api from "Api";

import { useRouter } from 'next/router';
import Link from 'next/link';


const MegaTab = () => {

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
      padding: "5px",
      cursor: 'pointer',
    };

     
    const AllModels = MegaMenu[Stage]
    
    return(
      AllModels[1].map((model, index) => {   
        return (
          <Link key={index} href="/model/[id]" as={`/model/${(model.id).replace(/ /g,"-")}`}>  
              <div className="col-6 col-md-4 col-lg-3 my-2 px-2"> 
                {model.files.map(image => { 
                    return ( 
                      <Link key={index} href="/model/[id]" as={`/model/${(model.id).replace(/ /g,"-")}`} > 
                        <a className='tab-anchor'><img style={modelImage} src={image.path} /></a>
                      </Link>
                      )
                })}
                <Link key={index} href="/model/[id]" as={`/model/${(model.id).replace(/ /g,"-")}`}> 
                  <a className='tab-anchor'>{model.name}</a>
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
        let style = {padding: '10px', cursor:'pointer'}
        if(stage == index){
          style = {borderBottom: '3px solid #F29D30', color:'#F29D30',padding: '10px', cursor:'pointer'}
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
              <div className="row">  
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
