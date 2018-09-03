import * as actionTypes from '../actions/actions';
import {updateObject} from '../utility';

const initialState={
    filteredFood:'',
    isSignInPopped:false,
    isHovered:false,
    anchorEl: null,
    isCheckedOut:false,
    isBotEnabled:false,
    lists:[],
    restaurants:[],
    error:false,
    isOrdered:false
};

const layoutReducer = (state=initialState,action) =>{
    switch(action.type){
        case actionTypes.FILTER_ITEMS:
             return updateObject(state,{filteredFood:action.filteredFood});
        case actionTypes.SIGN_INPOPPED:
            return updateObject(state,{isSignInPopped:action.isSignInPopped});
        case actionTypes.HOVERED:
            return updateObject(state,{isHovered:action.isHovered});
        case actionTypes.HANDLE_CLICK:
            return updateObject(state,{anchorEl:action.anchorEl});
        case actionTypes.CHECKED_OUT:
            return updateObject(state,{isCheckedOut:action.isCheckedOut,anchorEl:null});
        case actionTypes.INVOKE_BOT:
            return updateObject(state,{isBotEnabled:action.isBotEnabled});
        case actionTypes.BACK:
            return updateObject(state,{isModalOpened:action.isModalOpened});
        case actionTypes.SET_FOODITEMS:
            return updateObject(state,{lists:action.lists});
        case actionTypes.SET_RESTAURANTS:
            return updateObject(state,{restaurants:action.restaurants});
        case actionTypes.FETCH_FOODITEMS_FAILED:
            return updateObject(state,{error:true});
        case actionTypes.ORDER_FORM:
            return updateObject(state,{isOrdered:action.isOrdered,isCheckedOut:false});
        case actionTypes.CLOSE_ADDRESS:
            return updateObject(state,{isOrdered:action.isOrdered});
        default:
        return{
            ...state
        };
    }
}

export default layoutReducer;