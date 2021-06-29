import React, { useEffect } from "react";
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import "react-router-dom";
import Login from './Login'
import { auth } from './firebase';
import { useStateValue } from "./StateProvider";
import Payment from './Payment'
import {Elements} from '@stripe/react-stripe-js'
import {loadStripe} from '@stripe/stripe-js'
import Orders from './Orders'
const promise = loadStripe('pk_test_51IwiGWSEJbSzwSsYkgbbETJp1CbTBTmh8rRHmyDivbzZlII3FjwHfXInX2LlQx2AJ98dPYSAcgyDS0wcXSoKdu9U005pqK29P1');
// here always path = / ne last ma rakhvo ena sivay na badha j
// always eni uper rakhvana rehse
function App() {
  const [{ }, dispatch] = useStateValue();
  useEffect(() => {
    // it only once runs when the app component loads...
    auth.onAuthStateChanged(authUser => {
      console.log("THE USER IS >>>", authUser);
      if (authUser) {
        //the user was just logged in / user was logged in
        dispatch({
          type: "SET_USER",
          user: authUser
        })

      }
      else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null


        })
      }
    })
  }, [])
  return (
    <Router>
      <div className="App">

        <Switch>
          <Route path="/orders">
            <Header />
            <Orders />
            </Route>

          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />

          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe ={promise} >
            <Payment />
            
            </Elements>
            
          </Route>

          <Route path='/'>
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
