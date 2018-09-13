import React from "react";
import formStyles from "shared/formStyles.scss";
import PropTypes from "prop-types";
import FacebookLogin from "react-facebook-login";
const SignupForm = props => (
    <div className={formStyles.formComponent}>
            <FacebookLogin
            appId = "1797554730333066"
            autoLoad={false}
            fields="name,email,picture"
            cssClass={formStyles.button}
            callback={props.handleFacebookLogin} 
            textButton = "페이스북으로 시작"
            icon="fa-facebook-official"
            />
        <form className={formStyles.form} onSubmit={props.handleSubmit}>
            <input 
                type = "email" 
                placeholder="이메일" 
                className={formStyles.textInput}
                value={props.emailValue}
                onChange={props.handleInputChange}
                name="email"
            />
            <input 
                type = "text" 
                placeholder="이름" 
                className={formStyles.textInput}
                value={props.nameValue}
                onChange={props.handleInputChange}
                name="name"
            />
            <input 
                type = "username" 
                placeholder="닉네임" 
                className={formStyles.textInput}
                value={props.usernameValue}
                onChange={props.handleInputChange}
                name="username"
            />
            <input 
                type = "password" 
                placeholder="비밀번호" 
                className={formStyles.textInput}
                value={props.passwordValue}
                onChange={props.handleInputChange}
                name="password"
            />
            <input 
                type = "submit" 
                value="회원가입" 
                className={formStyles.button} 
            />
        </form>
        <p>
            가입 시 My100의 <span> 약관, 정책 </span>에 동의합니다.
        </p>
    </div>
);
SignupForm.propTypes = {
    nameValue: PropTypes.string.isRequired,
    emailValue: PropTypes.string.isRequired,
    usernameValue: PropTypes.string.isRequired,
    passwordValue: PropTypes.string.isRequired,
    handleInputChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    handleFacebookLogin: PropTypes.func.isRequired
}

export default SignupForm;