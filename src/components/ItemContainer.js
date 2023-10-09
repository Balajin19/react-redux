import { connect } from "react-redux";
import { buyCake } from "../redux/cake/cakeActions";
import { buyIceCream } from "../redux/iceCream/iceCreamActions";

function ItemContainer(props) {
  return (
    <div>
      <h2>Items - {props.item}</h2>
      <button onClick={props.dispatch}>Buy Item</button>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  const itemState = ownProps.cake
    ? state.cake.numOfCakes
    : state.iceCream.numOfIceCreams;
  return {
    item: itemState,
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  const dispatchState = ownProps.cake
    ? () => dispatch(buyCake())
    : () => dispatch(buyIceCream());

  return {
    dispatch: dispatchState,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer);
