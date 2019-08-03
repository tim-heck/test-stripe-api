import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route} from 'react-router-dom';
import Checkout from '../Checkout/Checkout';
import CheckoutBtn from '../CheckoutBtn/CheckoutBtn';
import ThankYou from '../ThankYou/ThankYou';

class App extends Component {
  
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1>Test Spite API</h1>
          </header>
          <br />
          <Route exact path="/" component={CheckoutBtn} />
          <Route exact path="/checkout" component={Checkout} />
          <Route exact path="/thank-you" component={ThankYou} />
        </div>
      </Router>
    );
  }
}

export default App;

