import React, { Component } from 'react';
import { connect } from 'react-redux';
import {registerUser} from '../actions/userActions';

class RegisterUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: ''
        }
    }

    handleRegisterUser = event => {
        var newUser = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password
        };
        this.props.registerUser(newUser);
    }

    handleTextChange = event => {
        switch (event.target.name) {
            case "name":
                this.setState({ name: event.target.value });
                break;
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

    render() {
        return (
            <div>
                <div className="form-group">
                    <input type="text" name="name" className="form-control" placeholder="Your Name *" value={this.state.name} onChange={this.handleTextChange} />
                </div>
                <div className="form-group">
                    <input type="text" name="email" className="form-control" placeholder="Your Email *" value={this.state.email} onChange={this.handleTextChange} />
                </div>
                <div className="form-group">
                    <input type="password" name="password" className="form-control" placeholder="Your Password *" value={this.state.password} onChange={this.handleTextChange} />
                </div>
                <div className="form-group">
                    <input type="submit" className="btn btn-success btn-block" value="Register" onClick={this.handleRegisterUser} />
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        error: state.user.error
    };
}

function mapDispatchToProps(dispatch) {
    return {
        registerUser: user => dispatch(registerUser(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterUser);