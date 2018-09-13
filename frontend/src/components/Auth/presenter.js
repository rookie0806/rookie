import React from "react";
import styles from "./styles.scss";
import LoginForm from "components/LoginForm";
import SignupForm from "components/SignupForm";

const Auth = (props, context) => (
    <main className={styles.auth}>
    <div className={styles.column}>
        <div className={`${styles.whiteBox} ${styles.formBox}`}>
        <img src={require("images/logo.png")} alt="Logo" width = "200px" height = "auto"/> 
        <span className={styles.sentence}>Make your own playlists</span> 
        {props.action==="login" && <LoginForm/>}
        {props.action==="signup" && <SignupForm/>}
        {props.action === "login" && 
        (<p>계정이 없으십니까?{" "}
            <span onClick={props.changeAction} className={styles.changeLink}>
            회원 가입
            </span>
        </p>)}
        {props.action === "signup" && 
        (<p>계정이 있으십니까?{" "}
            <span onClick={props.changeAction} className={styles.changeLink}>
            로그인
            </span>
        </p>)}
        </div>
        <div className={styles.appBox}>
        </div>
    </div>
    </main>
);

export default Auth;