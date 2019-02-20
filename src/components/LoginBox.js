import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import GoogleLogin from 'react-google-login';
import { connect } from 'react-redux';
import { mapUser, tryLogin, getUserPage } from '../actions/userActions';
import { Redirect } from 'react-router-dom';

class LoginBox extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    facebookLoginResponse = response => {
    }

    googleLoginSuccessResponse = response => {
    }

    handleTextChange = event => {
        switch (event.target.name) {
            case "email":
                this.setState({ email: event.target.value });
                break;
            case "password":
                this.setState({ password: event.target.value });
                break;
            default: this.setState({
                email: '',
                password: ''
            })
        }
    }

    handleLogin = event => {
        var user = {
            email: this.state.email,
            password: this.state.password
        };
        this.props.loginUser(user);
    }

    handleRegisterClick = event => {
        this.props.getRegisterPage();
    }

    render() {
        if (this.props.toRegisterPage) {
            return <Redirect to='/register' />
        }
        if (this.props.isLoggedIn)
        {
            return <Redirect to='/' />
        }
        return (
            <div className='login-box' >
                <FacebookLogin
                    appId='1807025612736097'
                    autoLoad={false}
                    fields='name, email, picture'
                    onClick={this.facebookLogin}
                    callback={this.facebookLoginResponse}
                    render={renderProps => (
                        <button className='btn login-btn' onClick={renderProps.onClick}>Login With Facebook</button>
                    )}
                />
                <GoogleLogin
                    clientId="560401063357-efcng7rfbo1nl0dakhr1o15lrfnsq98v.apps.googleusercontent.com"
                    onSuccess={this.googleLoginSuccessResponse}
                    render={renderProps => (
                        <button className='btn login-btn' onClick={renderProps.onClick}>Login With Google</button>
                    )}
                />

                <p className='d-flex justify-content-center text-muted'>or</p>
                <div className="form-group">
                    <input type="text" name="email" className="form-control" placeholder="Your Email *" value={this.state.email} onChange={this.handleTextChange} />
                </div>
                <div className="form-group">
                    <input type="password" name="password" className="form-control" placeholder="Your Password *" value={this.state.password} onChange={this.handleTextChange} />
                </div>
                <div className="form-group">
                    <input type="submit" className={!this.props.loading ? "btn btn-success btn-block" : "btn btn-success btn-block disabled"} value="Login" onClick={this.handleLogin} />
                </div>
                <p className='d-flex justify-content-center text-muted'>or</p>
                <div className="form-group">
                    <input type="submit" className="btn btn-success btn-block" value="Register" onClick={this.handleRegisterClick} />
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        isLoggedIn: state.user.isLoggedIn,
        userId: state.user.userId,
        name: state.user.name,
        email: state.user.email,
        loading: state.user.loading,
        toRegisterPage: state.user.toRegisterPage
    }
}

function mapDispatchToProps(dispatch) {
    return {
        mapUser: user => dispatch(mapUser(user)),
        loginUser: user => dispatch(tryLogin(user)),
        getRegisterPage: () => {dispatch(getUserPage())}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginBox)
