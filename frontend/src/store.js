import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import thunk from 'redux-thunk';
import { 
    productDetailsReducer, 
    productListReducer, 
    productCreateReducer,
    productUpdateReducer,
    productDeleteReducer,
} from './reducers/productReducers';
import { cartReducer } from './reducers/cartReducers';
import { 
    orderDeliverReducer,
    orderDeleteReducer,
    orderCreateReducer, 
    orderDetailsReducer, 
    orderPayReducer, 
    orderMineListReducer,
    orderListReducer,
} from './reducers/orderReducers';
import { 
    userDeleteReducer,
    userListReducer,
    userRegisterReducer, 
    userSigninReducer, 
    userDetailsReducer,
    userUpdateProfileReducer,
    userUpdateReducer,
} from './reducers/userReducers';

const initialState = {
    userSignin: {
        userInfo: localStorage.getItem('userInfo')
        ? JSON.parse(localStorage.getItem('userInfo'))
        : null,
    },
    cart: {
        cartItems: localStorage.getItem('cartItems')
        ? JSON.parse(localStorage.getItem('cartItems'))
        : [],
        shippingAddress: localStorage.getItem('shippingAddress')
        ? JSON.parse(localStorage.getItem('shippingAddress'))
        : {},

        paymentMethod: 'PayPal',
    },
};

const reducer = combineReducers({
    productList:productListReducer,
    productDetails:productDetailsReducer,
    cart: cartReducer,
    userSignin: userSigninReducer,
    userRegister: userRegisterReducer,
    orderCreate: orderCreateReducer,
    orderDetails: orderDetailsReducer,
    orderPay: orderPayReducer,
    orderMineList: orderMineListReducer,
    userDetails: userDetailsReducer,
    userUpdateProfile: userUpdateProfileReducer,
    userUpdate: userUpdateReducer,
    productCreate: productCreateReducer,
    productUpdate: productUpdateReducer,
    productDelete: productDeleteReducer,
    orderList: orderListReducer,
    orderDelete: orderDeleteReducer,
    orderDeliver: orderDeliverReducer,
    userList: userListReducer,
    userDelete: userDeleteReducer,

});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)) );

export default store;
