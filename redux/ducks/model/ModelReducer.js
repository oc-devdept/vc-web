import * as types from "./ModelTypes";

const INIT_STATE = {
  loading: false,
  // ModelData: {
  //   id: null,
  //   name: null,
  //   description: null,
  //   header: null,
  //   images: [],
  //   ProductGradeData: {}
  // }
  ModelData: null
};

export default (state = INIT_STATE, action) => {
  // console.log("redux state= ", state)
  switch (action.type) {
    case types.GET_MODEL_DATA:
      return { ...state, loading: true };

    // case types.GET_MODEL_DATA_SUCCESS:
    //   const { data } = action.payload;
    //   console.log("===============");
    //   console.log(action.payload);
    //   return {
    //     id: data.id,
    //     name: data.name,
    //     description: data.description,
    //     header: data.header[0].path,
    //     images: data.images,
    //     ProductGradeData: data
    //   };

    case types.GET_MODEL_DATA_SUCCESS:
      return { ...state, loading: false, ModelData: action.payload };

    case types.GET_MODEL_DATA_FAILURE:
      return { ...state, loading: false };

    default:
      return { ...state };
  }
};
