import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { signUp } from '../../store/actions/authActions';
import logo from '../../rocket.png';

const colorMemo = {};
                     //dark blue   green      yellow     pink       blue      purple      magenta   orange      red        turquoise
const borderColors = ['#69a3bd', '#69bd84', '#f7e1ad', '#f7add5', '#add4f7', '#bdadf7', '#dcadf7', '#fdbb8a', '#f15555', '#98e4db'];

const pickRandomColor = () => {
    let randomColor = borderColors[Math.floor(Math.random() * borderColors.length)];
    if (!colorMemo[randomColor]) {
        colorMemo[randomColor] = true
    }
    else randomColor = '#a6abaa'   // dafault grey color
    return randomColor
}

class SignUp extends Component {
    state = {
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        color: pickRandomColor(),
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signUp(this.state);
    }

    render() {
        const { auth, authError } = this.props;
        if (auth.uid) return <Redirect to='/' /> 

        return (
        <div className="container">
            <form className="white" onSubmit={this.handleSubmit}>
                <div className="form-logo__box">
                    <img className="form-logo" src={logo}/>
                </div>
                <h5 className="form-title">Sign Up</h5>
                <div className="input-field">
                    <label htmlFor="email">Email</label>
                    <input type="email" id='email' onChange={this.handleChange} />
                </div>
                <div className="input-field">
                    <label htmlFor="password">Password</label>
                    <input type="password" id='password' onChange={this.handleChange} />
                </div>
                <div className="input-field">
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" id='firstName' onChange={this.handleChange} />
                </div>
                <div className="input-field">
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" id='lastName' onChange={this.handleChange} />
                </div>
                <div className="input-field">
                    <button className="btn btn-form z-depth-0">Sign Up</button>
                    <div className="center red-text">
                        { authError ? <p className="user-error">{authError}</p> : null }
                    </div>
                </div>
            </form>
        </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        authError: state.auth.authError
    }
}

const mapDispatchToProps = (dispatch)=> {
    return {
        signUp: (creds) => dispatch(signUp(creds))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
