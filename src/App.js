import { React, Component } from "react";
import { Route, Routes } from "react-router-dom";
import { auth, createUserProfileDocument } from "./firebase/firebaseUtil";
import { onSnapshot } from "firebase/firestore";
import HomePage from "./Pages/homePage/HomePage";
import ShopPage from "./Pages/shopPage/Shop";
import Navbar from "./components/nav-bar/Navbar";
import AuthPage from "./Pages/auth-page/AuthPage";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }
  unSubscribeFromAuth = null; // this is a place holder for the function that is returned from fire store on line 21
  componentDidMount() {
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        onSnapshot(userRef, (snapShot) => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });
        });
      } else {
        this.setState({
          currentUser: userAuth,
        });
      }
      createUserProfileDocument(userAuth);
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
