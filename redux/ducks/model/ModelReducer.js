import * as types from "./ModelTypes";
import NotificationManager from "react-notifications/lib/NotificationManager";

const INIT_STATE = {
  loading: false,
  ModelData: {
    id: null,
    name: null,
    description: null,
    header: null,
    coverPhoto: '',
    galleryPhoto: [],
    exterior: [],
    interior: [],
    ProductGradeData: []
  }
  // ModelData: null
};

export default (state = INIT_STATE, action) => {
  // console.log("redux state= ", state)
  switch (action.type) {
    case types.GET_MODEL_DATA:
      return { ...state, loading: true };

    case types.GET_MODEL_DATA_SUCCESS:
      const data = action.payload;
      console.log("=======redux========", data);
      let coverPhoto;
      let exteriors = [];
      let interiors = [];
      for (let i = 0; i < data.file.length; i++) {
        if (data.file[i].fileableType === "CarPage-Cover") { coverPhoto = data.file[i] }
        else if (data.file[i].fileableType === "CarPage-Exterior") { exteriors.push(data.file[i]) }
        else if (data.file[i].fileableType === "CarPage-Interior") { interiors.push(data.file[i]) }
      }
      return {
        ...state,
        ModelData: {
          id: data.id,
          name: data.name,
          description: data.description,
          // header: data.header[0].path,
          coverPhoto: coverPhoto,
          exterior: exteriors,
          interior: interiors,
          galleryPhoto: data.gallery,
          ProductGradeData: data.product
        },
        loading: false,
      };

    // case types.GET_MODEL_DATA_SUCCESS:
    //   return { ...state, loading: false, ModelData: action.payload };

    case types.GET_MODEL_DATA_FAILURE:
      NotificationManager.warning(action.payload);
      return { ...state, loading: false };

    default:
      return { ...state };
  }
};
