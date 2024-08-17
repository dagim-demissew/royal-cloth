import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/homePage/HomePage";
import "./App.css";
import ShopPage from "./Pages/shopPage/Shop";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" Component={HomePage} />
        <Route exact path="/shop" Component={ShopPage} />
      </Routes>
    </>
  );
}

export default App;
