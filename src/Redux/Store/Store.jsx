import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";

import { reducer } from '../Reducer/Reducer';

let Products = JSON.parse(localStorage.getItem('products')) ? JSON.parse(localStorage.getItem('products')) : [];

let CartItem = JSON.parse(localStorage.getItem('CartItems')) ? JSON.parse(localStorage.getItem('CartItems')) : [];

let option = localStorage.getItem('option') ? localStorage.getItem('option') : '';

export const initialState = {
    categoryOption: option,
    products: Products,
    cartItems: CartItem,
}

export const store = createStore(reducer, initialState, applyMiddleware(thunk));