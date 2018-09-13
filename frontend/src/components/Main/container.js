import React, {Component} from "react";
import Main from "./presenter";
import PropTypes from "prop-types";
class Container extends Component{
    state = {
        loading:true
    };
    static propTypes = {
        getTop100: PropTypes.func.isRequired
    };
    componentDidMount(){
        const {getTop100} = this.props;
        if(!this.props.top100){
            getTop100();
        }
        else{
            this.setState({
                loading:false
            });
        }
    };
    componentWillReceiveProps = nextProps => {
        if(nextProps.top100){
            this.setState({
                loading: false
            });
        }
    };
    render(){
        const {top100} = this.props;
        return <Main {...this.state} top100={top100}/>
    }
}

export default Container;