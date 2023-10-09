import axios from "axios";

export const fetchUsersData = () => {
  return {
    type: "FETCH_USERS_DATA",
  };
};
export const fetchDataSuccess = (users) => {
  return {
    type: "FETCH_DATA_SUCCESS",
    payload: users,
  };
};
export const fetchDataFailure = (error) => {
  return {
    type: "FETCH_DATA_FAILURE",
    payload: error,
  };
};

export const fetchData = () => {
  return (dispatch) => {
    dispatch(fetchUsersData());
    axios
      .get("https://employee-details-api.cyclic.app/getAllEmployees")
      .then((response) => {
        const users = response.data;
        dispatch(fetchDataSuccess(users));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchDataFailure(errorMsg));
      });
  };
};
