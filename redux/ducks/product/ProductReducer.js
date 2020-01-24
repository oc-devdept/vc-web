import * as types from "./ProductTypes"

const INIT_STATE = {
  productModel: {
    id: null,
    name: null,
  },
  productGrade: {
    id: null,
    name: null,
    price: 0,
    description: null,
    images: [ ],
    data: { }
  },
  productExterior: {
    tempPlaceholderImage: null,
    id: null,
    name: null,
    price: 0,
    images: [ ],
    data: { }
  },
  productInterior: {
    tempPlaceholderImage: null,
    id: null,
    name: null,
    price: 0,
    images: [ ],
    data: { }
  },
  productRims: {
    tempPlaceholderImage: null,
    id: null,
    name: null,
    price: 0,
    images: [ ],
    data: { }
  },
  productAccessories: {
    selectedIds: { },
    data: { }
  }
}

export default (state = INIT_STATE, action) => {
  // console.log("redux state= ", state)
  switch(action.type){
    case types.GET_PRODUCT_MODEL_DATA:
      return {
        ...state
      }

    case types.GET_PRODUCT_MODEL_DATA_SUCCESS:
      const { data } = action.payload
      return {
        ...state,
        productModel: {
          id: data.id,
          name: data.name
        }
      }

    case types.GET_PRODUCT_MODEL_DATA_FAILURE:
      return {
        ...state
      }

    case types.GET_PRODUCT_GRADES:
      return {
        ...state
      }
    
    case types.GET_PRODUCT_GRADES_SUCCESS:
      var { 
        gradeId, 
        gradesData, 
        exteriorData, 
        interiorData, 
        accessoriesData 
      } = action.payload
      
      var accessoriesIdList = { }
      var populateAccessoriesIds = accessoriesData => {
        Object.values(accessoriesData.data.fields).map(value => {
          value.map(item => {
            accessoriesIdList[item.id] = false
          })
        })
      }
      populateAccessoriesIds(accessoriesData)
      
      const productGrade = gradesData.data.fields.find(element => element.id === gradeId)
      var imageList = [ ]
      var populateImageList = productGrade => {
        productGrade.files.map(item => {
          imageList.push(item.url)
        })
      }
      populateImageList(productGrade)
      return {
        ...state,
        productGrade: {
          id: productGrade.id,
          name: productGrade.name,
          price: productGrade.selling_Price,
          description: productGrade.description,
          images: imageList,
          data: gradesData.data
        },
        productExterior: {
          tempPlaceholderImage: imageList[0],
          id: exteriorData.data.fields["Colors"].objects[0].id,
          name: exteriorData.data.fields["Colors"].objects[0].name,
          price: exteriorData.data.fields["Colors"].objects[0].price,
          images: exteriorData.data.fields["Colors"].objects[0].files.map(item => item.url),
          data: exteriorData.data
        },
        productInterior: {
          id: interiorData.data.fields["Material"].objects[0].id,
          name: interiorData.data.fields["Material"].objects[0].name,
          price: interiorData.data.fields["Material"].objects[0].price,
          images: interiorData.data.fields["Material"].objects[0].files.map(item => item.url),
          data: interiorData.data
        },
        productRims: {
          id: interiorData.data.fields["Rims"].objects[0].id,
          name: interiorData.data.fields["Rims"].objects[0].name,
          price: interiorData.data.fields["Rims"].objects[0].price,
          images: interiorData.data.fields["Rims"].objects[0].files.map(item => item.url),
          data: interiorData.data
        },
        productAccessories: {
          selectedIds: accessoriesIdList,
          data: action.payload.accessoriesData.data
        }
      }

    case types.GET_PRODUCT_GRADES_FAILURE:
      return {
        ...state
      }
    
    case types.SELECTED_PRODUCT_GRADE:
      var id = action.payload
      var { fields } = state.productGrade.data
      var object = fields.find(element => element.id === id)

      var imageList = [ ]
      var populateImageList = object => {
        object.files.map(item => {
          imageList.push(item.url)
        })
      }
      populateImageList(object)

      return {
        ...state,
        productGrade: {
          ...state.productGrade,
          id: object.id,
          name: object.name,
          price: object.selling_Price,
          description: object.description,
          images: imageList
        },
        productExterior: {
          ...state.productExterior,
          tempPlaceholderImage: imageList[0]
        }
      }

    case types.GET_PRODUCT_GRADE_DATA:
      return {
        ...state
      }

    case types.GET_PRODUCT_GRADE_DATA_SUCCESS:
      var { 
        exteriorData,
        interiorData,
        accessoriesData
      } = action.payload

      var accessoriesIdList = { }
      var populateAccessoriesIds = accessoriesData => {
        Object.values(accessoriesData.data.fields).map(value => {
          value.map(item => {
            accessoriesIdList[item.id] = false
          })
        })
      }
      populateAccessoriesIds(accessoriesData)

      return {
        ...state,
        productExterior: {
          ...state.productExterior,
          id: exteriorData.data.fields["Colors"].objects[0].id,
          name: exteriorData.data.fields["Colors"].objects[0].name,
          price: exteriorData.data.fields["Colors"].objects[0].price,
          images: exteriorData.data.fields["Colors"].objects[0].files.map(item => item.url),
          data: exteriorData.data
        },
        productInterior: {
          ...state.productInterior,
          id: interiorData.data.fields["Material"].objects[0].id,
          name: interiorData.data.fields["Material"].objects[0].name,
          price: interiorData.data.fields["Material"].objects[0].price,
          images: interiorData.data.fields["Material"].objects[0].files.map(item => item.url),
          data: interiorData.data
        },
        productRims: {
          id: interiorData.data.fields["Rims"].objects[0].id,
          name: interiorData.data.fields["Rims"].objects[0].name,
          price: interiorData.data.fields["Rims"].objects[0].price,
          images: interiorData.data.fields["Rims"].objects[0].files.map(item => item.url),
          data: interiorData.data
        },
        productAccessories: {
          selectedIds: accessoriesIdList,
          data: action.payload.accessoriesData.data
        }
      }

    case types.GET_PRODUCT_GRADE_DATA_FAILURE:
      return {
        ...state
      }

    case types.SELECTED_PRODUCT_EXTERIOR:
      console.log("action.payload= ", action.payload)
      var id = action.payload
      var { objects } = state.productExterior.data.fields["Colors"]
      var object = objects.find(element => element.id === id)

      return {
        ...state,
        productExterior: {
          ...state.productExterior,
          tempPlaceholderImage: state.productGrade.images[0],
          id: object.id,
          name: object.name,
          price: object.price,
          images: object.files.map(item => item.url)
        }
      }

    case types.SELECTED_PRODUCT_INTERIOR:
      var id = action.payload
      var { objects } = state.productInterior.data.fields["Material"]
      var object = objects.find(element => element.id === id)

      return {
        ...state,
        productInterior: {
          ...state.productInterior,
          id: object.id,
          name: object.name,
          price: object.price,
          images: object.files.map(item => item.url)
        }
      }

    case types.SELECTED_PRODUCT_RIMS:
      var id = action.payload
      var { objects } = state.productInterior.data.fields["Rims"]
      var object = objects.find(element => element.id === id)

      return {
        ...state,
        productRims: {
          ...state.productRims,
          id: object.id,
          name: object.name,
          price: object.price,
          images: object.files.map(item => item.url)
        }
      }

    case types.SELECTED_PRODUCT_ACCESSORIES:
      const newValue = !state.productAccessories.selectedIds[action.payload]
      return {
        ...state,
        productAccessories: {
          ...state.productAccessories,
          selectedIds: {
            ...state.productAccessories.selectedIds,
            [action.payload]: newValue
          }
        }
      }

    default:
      return {...state}
  }
}