import axios from 'axios';

export const FILTER_ITEMS = 'FILTER_ITEMS';
export const SIGN_INPOPPED = 'SIGN_INPOPPED';
export const HOVERED ='HOVERED';
export const HANDLE_CLICK ='HANDLE_CLICK';
export const CHECKED_OUT ='CHECKED_OUT';
export const CLOSE_MODAL ='CLOSE_MODAL';
export const INVOKE_BOT ='INVOKE_BOT';
export const VIEW_RESTAURANTS = 'VIEW_RESTAURANTS';
export const RADIO_SELECT  ='RADIO_SELECT';
export const BACK = 'BACK';
export const SET_FOODITEMS ='SET_FOODITEMS';
export const FETCH_FOODITEMS_FAILED = 'FETCH_FOODITEMS_FAILED';
export const SET_RESTAURANTS = 'SET_RESTAURANTS';
export const CLEAR_QUANTITY='CLEAR_QUANTITY';
export const ORDER_FORM ='ORDER_FORM';
export const CLOSE_ADDRESS = 'CLOSE_ADDRESS';


export const filterItems = (filteredFood) =>{
    return{
        type:'FILTER_ITEMS',
        filteredFood:filteredFood
    }
}

export const signIn = (isSignInPopped) =>{
    return{
        type:'SIGN_INPOPPED',
        isSignInPopped:isSignInPopped
    }
}

export const onHover = (isHovered) =>{
    return{
        type:'HOVERED',
        isHovered:isHovered
    }
}

export const handleClick = (anchorEl)=>{
    return{
        type:'HANDLE_CLICK',
        anchorEl:anchorEl
    }
}

export const checkOut = (isCheckedOut)=>{
    return{
        type:'CHECKED_OUT',
        isCheckedOut:isCheckedOut,
    }
}

export const closeModal = (isCheckedOut)=>{
    return{
        type:'CHECKED_OUT',
        isCheckedOut:isCheckedOut
    }
}

export const closeAddressModal = (isOrdered)=>{
    return{
        type:'CLOSE_ADDRESS',
        isOrdered:isOrdered
    }
}

export const orderForm = (isOrdered)=>{
    return{
        type:'ORDER_FORM',
        isCheckedOut:false,
        isOrdered:isOrdered
    }
}

export const invokeBot = (IsBotEnabled)=>{
    return{
        type:'INVOKE_BOT',
        isBotEnabled:IsBotEnabled
    }
}

export const setFoodItems =(lists)=>{
    return{
        type:'SET_FOODITEMS',
        lists:lists
    }
}

export const fetchFoodItemsFailed = ()=>{
    return{
        type:'FETCH_FOODITEMS_FAILED',
        error:true
    }
};

export const getFoodItems = () =>{
    return dispatch =>{
        const url="https://api.jsonbin.io/b/5ec694b118c8475bf16da1e3";
        axios.get(url)
			.then(response => {
                    dispatch(setFoodItems(response.data))
            })
            .catch(error =>{
                    dispatch(fetchFoodItemsFailed())
            })
    }
};

export const setRestaurants = (restaurants)=>{
    return{
        type:'SET_RESTAURANTS',
        restaurants:restaurants

    }
}


export const getRestaurants = ()=>{
    return dispatch=>{
        const url="https://api.jsonbin.io/b/5ec69449e91d1e45d10e96bc";
        axios.get(url)
			.then(response => {
                    dispatch(setRestaurants(response.data))
            })
            .catch(error =>{
                    dispatch(fetchFoodItemsFailed())
            });
    }
}














