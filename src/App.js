import { React, Component } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/homePage/HomePage";
import ShopPage from "./Pages/shopPage/Shop";
import Navbar from "./components/nav-bar/Navbar";
import AuthPage from "./Pages/auth-page/AuthPage";
import { auth } from "./firebase/firebaseUtil";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }
  unSubscribeFromAuth = null;
  componentDidMount() {
    this.unSubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }
  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }

  render() {
    return (
      <>
        <Navbar currentUser={this.state.currentUser} />
        <Routes>
          <Route exact path="/" Component={HomePage} />
          <Route exact path="/shop" Component={ShopPage} />
          <Route exact path="/auth" Component={AuthPage} />
        </Routes>
      </>
    );
  }
}

export default App;
