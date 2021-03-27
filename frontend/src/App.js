import React from "react";
import { Route } from "react-router-dom";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Home from "./pages/Home.js";
import Product from "./pages/Product.js";
import Cart from "./pages/Cart.js";
import Login from "./pages/Login.js";
import Register from "./pages/Register.js";
import Profile from "./pages/Profile.js";
import UpdateProfile from "./pages/UpdateProfile.js";
import Shipping from "./pages/Shipping.js";
import PaymentMethod from "./pages/PaymentMethod.js";
import PlaceOrder from "./pages/PlaceOrder.js";

const App = () => {
  return (
    <div className='App'>
      <Header />
      <hr />
      <Route path='/login' component={Login} />
      <Route path='/register' component={Register} />
      <Route path='/shipping' component={Shipping} />
      <Route path='/payment' component={PaymentMethod} />
      <Route path='/placeorder' component={PlaceOrder} />
      <Route path='/profile' component={Profile} />
      <Route path='/updateprofile' component={UpdateProfile} />
      <Route path='/product/:id' component={Product} />
      <Route path='/cart/:id?' component={Cart} />
      <Route exact path='/' component={Home} />
      <Footer />
    </div>
  );
};

export default App;
