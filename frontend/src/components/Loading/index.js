import React from "react";
import styles from "./styles.scss";

const Loading = props => (
    <div className={styles.container}>
        <img 
            src={require("images/loading.gif")} 
            className={styles.loading} 
            alt="loading"
        />
    </div>
);

export default Loading;