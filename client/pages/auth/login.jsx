import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { actions } from '../../actions';

import Card from '../../components/card.jsx'

const Login = React.createClass({
  getInitialState: function() {
    return {
      username: "",
      password: "",
      error: this.props.error,
      errorMessage: this.props.errorMessage,
    }
  },
  
  componentWillReceiveProps(newProps) {
    console.log("[component] updating props");
    this.setState({
      error: newProps.error,
      errorMessage: newProps.errorMessage
    });
  },
  
  onChange(evt) {
    var ns = {}
    ns[evt.target.name] = evt.target.value;
    this.setState(ns);
  },
  
  logIn(evt) {
    evt.preventDefault();
    console.log("[login] logging in");
    
    this.props.dispatch(actions.logIn({
      username: this.state.username,
      password: this.state.password
    }));
  },
  
  render: function() {
    console.log("component upon render", this);
    console.log("state upon render", this.state);
    // console.log("dispatch", this.props.dispatch);
    return (
      <Card title="Log In">
        {(this.state.error) ? <span className="error">{this.state.errorMessage}</span> : null}
        <form onSubmit={this.logIn}>
          <input type="text" onChange={this.onChange} value={this.state['username']} name="username" placeholder="username" />
          <input type="password" onChange={this.onChange} value={this.state['password']} name="password" placeholder="password" />
          <button>Log in</button>
        </form>
        <span>or</span>
        <Link to="/auth/rutgers">Log in with CAS</Link>
        <Link to="/auth/github">Log in with GitHub</Link>
        <Link to="/auth/register">Register</Link>
      </Card>
    );
  }
});

function mapStateToProps(reducerStates) {
  console.log("[connect] state", reducerStates.loginReducer);
  
  return Object.assign({}, reducerStates.loginReducer);
}

module.exports = connect(mapStateToProps)(Login);
