const initialState = {
  loading: false,
  users: [],
  error: "",
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_USERS_DATA":
      return {
        ...state,
        loading: true,
      };
    case "FETCH_DATA_SUCCESS":
      return {
        ...state,
        loading: false,
        users: action.payload,
        error: "",
      };
    case "FETCH_DATA_FAILURE":
      return {
        ...state,
        loading: false,
        users: [],
        error: action.payload,
      };
    default:
      return state;
  }
};
