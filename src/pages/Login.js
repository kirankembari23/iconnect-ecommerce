import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';

class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      errorMessage:"",
      successMessage:""
    };

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
  }





  onSubmit(event){
     event.preventDefault();
     let email = this.state.username;
     let password = this.state.password;
     if(email == "kiran"&& password =="kiran123"){
      this.setState((state, props)=>({
        successMessage: "User login done successfully",
      }));
      this.props.history.push('/products')
     }else{
      this.setState((state, props)=>({
        errorMessage: "Username & Password deos not matched",
      }));
      setTimeout(()=>{
        this.setState((state, props)=>({
          errorMessage: "",
        }));
      },3000)
     }
  }

  

  onChangeUsername(event){
    var username = event.target.value;
    this.setState((state, props)=>({
      username: username, 
    }));
  }

  onChangePassword(event){
    var password = event.target.value;

    this.setState((state, props)=>({
      password: password,
    }));
  }

  

  render() {
    return (
      <Fragment>

      <div className="form-box">
    <p>{this.state.errorMessage}</p>
      <form className="login-form" onSubmit={this.onSubmit}>
      <h2>Login</h2>
                <hr/>
        <div className="form-group">
          <input
            type="text"
            placeholder="UserName"
            name="username"
            value={this.state.username}
            onChange={this.onChangeUsername}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={this.state.password}
            onChange={this.onChangePassword}
            minLength="6"
            required
          />
        </div>
        <div className="form-group">
             <button type="submit" className="btn btn-primary btn-block btn-lg">Login</button>
        </div>
      </form>
      </div>
    </Fragment>
    );
  }
}

function mapStateToProps(store) {
  return {
    //user: store.user.user,
  };
}

export default withRouter(connect(mapStateToProps)(Login));
