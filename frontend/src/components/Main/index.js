import { connect } from "react-redux";
import Container from "./container";
import {actionCreators as MusicActions} from "redux/modules/music";
const mapStateToProps = (state,ownprops) => {
    const {music : {top100} } = state;
    return{
        top100
    };
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getTop100: () => {
            dispatch(MusicActions.getTop100());
        }
    };
};
export default connect(mapStateToProps,mapDispatchToProps)(Container);