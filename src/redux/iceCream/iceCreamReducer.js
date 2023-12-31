const initialState = {
  numOfIceCreams: 30,
};

const iceCreamReducer = (state = initialState, action) => {
  switch (action.type) {
    case "BUY_ICECREAM":
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams - action.payload,
      };
    default:
      return state;
  }
};

export default iceCreamReducer;