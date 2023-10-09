import { useEffect } from "react";
import { connect } from "react-redux";
import { fetchData } from "../redux/user/userActions";

const UserContainer = ({ userData, getValue }) => {
  useEffect(() => {
    getValue();
  }, []);
  console.log(process.env.REACT_APP_API_URL, "url");
  return userData.loading ? (
    <h1> Loading</h1>
  ) : userData.error ? (
    <h2>{userData.error}</h2>
  ) : (
    <div>
      {userData.users &&
        userData.users.map((data, index) => <p key={index}>{data.name}</p>)}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userData: state.user,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getValue: () => dispatch(fetchData()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
