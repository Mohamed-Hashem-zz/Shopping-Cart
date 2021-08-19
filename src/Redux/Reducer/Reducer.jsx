import { ADD_TO_CART, OPTION, PRODUCTS, REMOVE_ITEM, REMOVE_PRODUCT, PAY_ORDERS } from './../Actions/Types';

export function reducer(prevState, { type, option, products }) {

    switch (type) {
        case OPTION:
            return { ...prevState, categoryOption: option, products: products }
        case ADD_TO_CART:
            return { ...prevState, cartItems: products };
        case PRODUCTS:
            return { ...prevState, products: products }
        case REMOVE_ITEM:
            return { ...prevState, cartItems: products };
        case REMOVE_PRODUCT:
            return { ...prevState, cartItems: products };
        case PAY_ORDERS:
            return { ...prevState, cartItems: products };
        default:
            return prevState;
    }
}