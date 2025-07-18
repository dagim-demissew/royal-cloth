import { React, Component } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { connect } from "react-redux";
import { selectCurrentUser } from "./redux/user/user-selector";
import HomePage from "./Pages/homePage/HomePage";
import ShopPage from "./Pages/shopPage/Shop";
import { checkUserSession } from "./redux/user/user-actions";
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
   const { checkUserSession } = this.props;
   
    checkUserSession();
  }
  componentWillUnmount() {
    // this.unSubscribeFromAuth();
  }

  render() {
    const { currentUser } = this.props;
    return (
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop/*" element={<ShopPage />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route
            path="/auth"
            element={currentUser ? <Navigate to="/" /> : <AuthPage />}
          />
        </Routes>
      </>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession),
});

export default connect(mapStateToProps,mapDispatchToProps)(App);
