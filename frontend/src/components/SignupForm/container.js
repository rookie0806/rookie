import React, {Component} from "react";
import SignupForm from "./presenter";
import PropTypes from "prop-types";

class Container extends Component{
    state ={
        email: "",
        name : "",
        username : "",
        password : "",
    }
    static propTypes = {
        facebookLogin: PropTypes.func.isRequired,
        createAccount: PropTypes.func.isRequired
    };
    render(){
        const {username,password,email,name} = this.state;
        return <SignupForm 
                    handleInputChange={this._handleInputChange} 
                    handleSubmit={this._handleSubmit}
                    handleFacebookLogin={this._handleFacebookLogin}
                    usernameValue={username} 
                    passwordValue={password}
                    emailValue={email}
                    nameValue={name}
                />;
    }
    _handleInputChange = event=> {
        const { target : {value,name}} = event;
        this.setState({
            [name]: value
        });
    };
    _handleSubmit = event => {
        const {createAccount}  = this.props;
        const {username,password,email,name} = this.state;
        event.preventDefault();
        createAccount(username, email, password, name);
        console.log(this.state);//react redux!!
    }
    _handleFacebookLogin = response => {
        const {facebookLogin} = this.props;
        facebookLogin(response.accessToken);
    };

}
export default Container;