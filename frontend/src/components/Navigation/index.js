import {connect} from "react-redux";
import Container from "./container";
const mapStateToProps = (state, ownProps)=> {
    return {
        user: state.user
    };
};
export default connect(mapStateToProps)(Container);