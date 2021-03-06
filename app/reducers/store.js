import * as actionTypes from '../constants/store.js';

const initialState = [];
export default function userInfo(state = initialState, action) {
    switch (action.type) {
            //修改登录城市
        case actionTypes.STORE_UPDATE:
            return action.data;
        case actionTypes.STORE_ADD:
            //state.unshift(action.data);
            //return state;
            return [action.data , ...state];
        case actionTypes.STORE_REMOVE:
            return state.filter((item , index) => {
                if(item.id !== action.data.id){
                    return item;
                }
            });
        default:
            return state;
    }
}
