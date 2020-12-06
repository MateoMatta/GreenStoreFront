import React, {  useContext, useState } from 'react';
import FormErrors from "../FormErrors";
import {AccountContext} from './Accounts';

export default () =>{

  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')

  const { authenticate } = useContext(AccountContext)

  const handleSubmit = async event => {
    event.preventDefault();
    
    authenticate(email, password)
      .then(data => {
        console.log('Logged in!', data);
      }).catch(err => {
        console.log('Failed to Login!', err);
      })

  };

  return (
    <section className="section auth">
      <div className="container">
        <h1>Log in</h1>

        <form onSubmit={handleSubmit}>
          <div className="field">
            <p className="control">
              <input 
                className="input" 
                type="text"
                id="email"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                value={email}
                onChange={event => setEmail(event.target.value)}
              />
            </p>
          </div>
          <div className="field">
            <p className="control has-icons-left">
              <input 
                className="input" 
                type="password"
                id="password"
                placeholder="Password"
                value={password}
                onChange={event => setPassword(event.target.value)}
              />
              <span className="icon is-small is-left">
                <i className="fas fa-lock"></i>
              </span>
            </p>
          </div>
          <div className="field">
            <p className="control">
              <a href="/forgotpassword">Forgot password?</a>
            </p>
          </div>
          <div className="field">
            <p className="control">
              <button type='submit' className="button is-success">
                Login
              </button>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};