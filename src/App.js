import { Provider } from "react-redux";
import { store } from "./redux/store";
import "./App.css";
import { CakeContainer } from "./components/CakeContainer";
import IcecreamContainer from "./components/IceCreamContainer";
import ItemContainer from "./components/ItemContainer";
import UserContainer from "./components/UserContainer";
function App() {
  return (
    <Provider store={store}>
      <ItemContainer cake />
      <ItemContainer />
      <CakeContainer />
      <IcecreamContainer />
      <UserContainer/>
    </Provider>
  );
}

export default App;
