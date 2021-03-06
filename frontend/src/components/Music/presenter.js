import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.scss";

const Music = (props,context)=>{
    return(
        <tr className={styles.table}>
            <td className={styles.column}><div className={styles.grade}>{props.Grade}</div></td>
            <td className={styles.column}>
                <img className={styles.albumart} src={props.Server_img} alt={props.Album_name}></img>
            </td>
            <td className={styles.column}>{props.Music_name}</td>
            <td className={styles.column}>{props.Singer_name}</td>
            <td className={styles.column}>{props.Album_name}</td>
        </tr>
    );
}

Music.propTypes={
    Grade : PropTypes.string.isRequired,
    Music_name : PropTypes.string.isRequired,
    Singer_name : PropTypes.string.isRequired,
    Album_name : PropTypes.string.isRequired,
    Server_img : PropTypes.string.isRequired,
    Melon_serial: PropTypes.number.isRequired,
    Bugs_serial: PropTypes.number.isRequired,
    Mnet_serial: PropTypes.number.isRequired,
    Genie_serial: PropTypes.number.isRequired,
    Naver_serial: PropTypes.number.isRequired,
    tags: PropTypes.array.isRequired,
}
export default Music;