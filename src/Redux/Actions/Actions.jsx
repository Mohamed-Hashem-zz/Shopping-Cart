import { ADD_TO_CART, OPTION, PRODUCTS, REMOVE_ITEM, REMOVE_PRODUCT, PAY_ORDERS } from './Types';

import products1 from "./../../db/mens.json";
import products2 from "./../../db/women.json";
import products3 from "./../../db/boys.json";

// ** set Selected Options and Products  ** //
export const setSelectedOption = (option) => (dispatch) => {

    localStorage.removeItem('option');

    localStorage.setItem('option', option);

    dispatch({ type: OPTION, option: option })
}
// ** End ** //

// ** Get All Products  ** //
export const getProducts = () => (dispatch, getState) => {

    const { categoryOption } = getState();

    console.log(categoryOption);

    let products = [];

    if (categoryOption === "Mens")
        products = products1;
    else if (categoryOption === "Women")
        products = products2;
    else
        products = products3;

    localStorage.setItem('products', JSON.stringify(products));

    dispatch({ type: PRODUCTS, products: products });
}
// ** End ** //

// ** Get PRODUCT DETAILS  ** //
export const getProduct = (id) => (dispatch, getState) => {

    const { products } = getState();

    const product = products.find(elem => elem.id === id);

    return Promise.resolve(product);
}
// ** End ** //

// ** Add Items To Carts  ** //
export const addItemsToCart = (product, quantity) => (dispatch, getState) => {

    const { cartItems } = getState();

    const exist = cartItems.find((elem) => elem.id === product.id);

    let Cart = [];

    if (exist)
        Cart = cartItems.map((elem) => elem.id === product.id ? { ...exist, totalQuantity: exist.totalQuantity + Number(quantity) } : elem);
    else
        Cart = [...cartItems, { ...product, totalQuantity: Number(quantity) }]

    localStorage.removeItem('CartItems');
    localStorage.setItem("CartItems", JSON.stringify(Cart));

    dispatch({ type: ADD_TO_CART, products: Cart })
}
// ** End ** //

// ** Decrease Quantity Item  ** //
export const removeQuantityItem = (product) => (dispatch, getState) => {

    const { cartItems } = getState();

    let cart = []

    const exist = cartItems.find((elem) => elem.id === product.id);

    if (exist.totalQuantity > 1)
        cart = cartItems.map((elem) => elem.id === product.id ? { ...exist, totalQuantity: exist.totalQuantity - 1 } : elem);
    else
        cart = cartItems.filter((elem) => elem.id !== product.id); // Filter removed Product From Cart Items if Quantity less than 1

    localStorage.removeItem('CartItems');
    localStorage.setItem("CartItems", JSON.stringify(cart));

    dispatch({ type: REMOVE_ITEM, products: cart });
}
// ** End ** //

// ** Remove Product From Carts ** //
export const removeProduct = (product) => (dispatch, getState) => {

    const { cartItems } = getState();

    const cart = cartItems.filter((elem) => elem.id !== product.id); // Filter removed Product From Cart Items

    localStorage.removeItem('CartItems');
    localStorage.setItem("CartItems", JSON.stringify(cart));

    dispatch({ type: REMOVE_PRODUCT, products: cart });
}
// ** End ** //


// ** Pay Orders To Carts ** //
export const payOrders = () => (dispatch, getState) => {
    const { cartItems } = getState();

    cartItems.length = 0;

    localStorage.removeItem('CartItems');
    localStorage.setItem("CartItems", JSON.stringify(cartItems));

    dispatch({ type: PAY_ORDERS, products: cartItems });
}
// ** End ** //