//imports
import {actionCreators as UserActions} from "redux/modules/user";

//actions
const SET_TOP100 = "SET_TOP100";
//action creators
function setTop100(top100){
    return{
        type: SET_TOP100,
        top100
    }
}
//api actions

function getTop100(){
    return (dispatch, getState) => {
        const {user : { token }} = getState();
        fetch("/musics/top100")
        .then(response=>response.json())
        .then(json => dispatch(setTop100(json)));
    }
}
//initial state
const initialState={};
//reducer

function reducer(state=initialState,action){
    switch(action.type){
        case SET_TOP100:
            return applySetTop100(state,action);
        default:
            return state;
    }
}
//reducer functions 
function applySetTop100(state,action){
    const {top100} = action;
    return {
        ...state,
        top100
    };
}
//export 
const actionCreators ={
    getTop100
};
export {actionCreators};
//default reducer export

export default reducer;