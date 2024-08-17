import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/homePage/HomePage";
import ShopPage from "./Pages/shopPage/Shop";
import Navbar from "./components/nav-bar/Navbar";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" Component={HomePage} />
        <Route exact path="/shop" Component={ShopPage} />
      </Routes>
    </>
  );
}

export default App;
