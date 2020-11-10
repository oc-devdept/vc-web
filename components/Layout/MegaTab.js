import React, { useState, useEffect } from "react";
import api from "Api";

import Link from "next/link";

const MegaTab = () => {
  const [MegaMenu, setMegaMenu] = useState([]);
  const [Stage, setStage] = useState(0);
  const [Loading, setLoading] = useState(false);
  useEffect(() => {
    async function fetchData() {
      const result = await api.get(`categories/getMegaMenu`);
      setMegaMenu(() => Object.entries(result.data.fields));

      const testingResult = await api.get(`product/`);
      console.log(testingResult);
      console.log("PPP");
      console.log(result.data.fields);

      setLoading(() => false);
    }
    fetchData();
  }, []);

  const _RenderModel = () => {
    var modelImage = {
      objectFit: "cover",
      borderRadius: "20px",
      height: "100px",
      width: "145px",
      padding: "5px",
      cursor: "pointer"
    };

    const AllModels = MegaMenu[Stage];
    return AllModels[1].map((model, index) => {
      return (
        <Link
          key={index}
          href={`${model.url}`}
        >
          <div className="col-6 col-sm-4 col-md-3 col-lg-2 py-3 px-2 text-center">
            <img style={modelImage} src={model.files[0].path} />
            <Link
              key={index}
              href={`${model.url}`}
            >
              <a className="tab-anchor">{model.name}</a>
            </Link>
          </div>
        </Link>
      );
    });
  };

  const _RenderAllItems = () => {
    return MegaMenu.map((e, index) => {
      const key = e[0];
      const stage = Stage;
      let style = { padding: "15px 20px", cursor: "pointer" };
      if (stage == index) {
        style = {
          ...style,
          borderBottom: "3px solid #F29D30",
          color: "#F29D30"
        };
      }
      return (
        // All BMW Honda ...
        <div key={index} style={style} onClick={() => _HandleItem(index)}>
          {key}
        </div>
      );
    });
  };

  const _HandleItem = async index => {
    setStage(() => index);
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-11">
          <div className="text-uppercase">
            {Loading && <div>Loading ....</div>}
            <React.Fragment>
              <ul className="nav nav-tabs justify-content-center">
                {_RenderAllItems()}
              </ul>

              <div className="tab-content">
                {MegaMenu.length > 0 && (
                  <div className="row justify-content-center">
                    {_RenderModel()}
                  </div>
                )}
              </div>
            </React.Fragment>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MegaTab;
