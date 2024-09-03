import { React, Component } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { auth, createUserProfileDocument } from "./firebase/firebaseUtil";
import { onSnapshot } from "firebase/firestore";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user-actions";
import { selectCurrentUser } from "./redux/user/user-selector";
import HomePage from "./Pages/homePage/HomePage";
import ShopPage from "./Pages/shopPage/Shop";
import Navbar from "./components/nav-bar/Navbar";
import AuthPage from "./Pages/auth-page/AuthPage";
import Checkout from "./Pages/checkout/Checkout";
import "./App.css";
import { createStructuredSelector } from "reselect";

class App extends Component {
  unSubscribeFromAuth = null; // this is a place holder for the function that is returned from fire store on line 21
  componentDidMount() {
    const { setCurrentUser } = this.props;
    console.log(this.props.currentUser, "yellow");
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        onSnapshot(userRef, (snapShot) => {
          setCurrentUser({
            ...snapShot.data(),
            id: snapShot.id,
            createdAt: snapShot.data().createdAt.toDate().toISOString(),
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
      createUserProfileDocument(userAuth);
    });
  }
  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }

  render() {
    const { currentUser } = this.props;
    return (
      <>
        <Navbar />
        <Routes>
          <Route exact path="/" Component={HomePage} />
          <Route exact path="/shop" Component={ShopPage} />
          <Route exact path="/checkout" Component={Checkout} />
          <Route
            exact
            path="/auth"
            element={currentUser ? <Navigate to="/" /> : <AuthPage />}
          />
        </Routes>
      </>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
