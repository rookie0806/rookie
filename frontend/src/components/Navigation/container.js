import React, {Component} from "react";
import Navigation from "./presenter";

class Container extends Component{
    render(){
        const { user } = this.props;
        return (
            <Navigation 
            isLoggedIn={user.isLoggedIn}/>
        );
    }
}

export default Container;