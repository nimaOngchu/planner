import React, { Component } from 'react'

export class SignIn extends Component {
    statre = {
        email :'',
        password: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);

    }
  render() {
    return (
        <div className="container">
            <form className="white" onSubmit = {this.handleSubmit}>
                <h5 className="grey-text text-darken-3">Sign In</h5>
                <div className="input-field">
                    <label htmlFor="email"> email</label>
                    <input type="email" id="email" onChange = {this.handleChange}/>
                </div>
                <div className="input-field">
                    <label htmlFor="password"> Password</label>
                    <input type="password" id="password" onChange = {this.handleChange}/>
                </div>
                <button className="btn pink lighten-1 z-depth-0">Log In</button>
            </form>
      </div>
    )
  }
}

export default SignIn
