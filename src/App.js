import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Products from './components/Products';
import Clients from './components/Clients';
import ProductAdmin from './components/ClientAdmin';
import LogIn from './components/auth/LogIn';
import Register from './components/auth/Register';
import ForgotPassword from './components/auth/ForgotPassword';
import ForgotPasswordVerification from './components/auth/ForgotPasswordVerification';
import ChangePassword from './components/auth/ChangePassword';
import ChangePasswordConfirm from './components/auth/ChangePasswordConfirm';
import Welcome from './components/auth/Welcome';
import Footer from './components/Footer';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import {Account} from './components/auth/Accounts'


library.add(faEdit);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Account>
          <Router>
            <div>
              <Navbar />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/products" component={Products} />
                <Route exact path="/clients" component={Clients} />
                <Route exact path="/admin" component={ProductAdmin} />
                <Route exact path="/login" component={LogIn} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/forgotpassword" component={ForgotPassword} />
                <Route exact path="/forgotpasswordverification" component={ForgotPasswordVerification} />
                <Route exact path="/changepassword" component={ChangePassword} />
                <Route exact path="/changepasswordconfirmation" component={ChangePasswordConfirm} />
                <Route exact path="/welcome" component={Welcome} />
              </Switch>
              <Footer />
            </div>
          </Router>
        </Account>
      </div>
    );
  }
}

export default App;
