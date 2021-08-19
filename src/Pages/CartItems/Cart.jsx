import React from 'react'
import { connect, useSelector } from 'react-redux'
import { addItemsToCart, removeQuantityItem, removeProduct, payOrders } from './../../Redux/Actions/Actions';

const Cart = (props) => {

    const cartItems = useSelector(state => state.cartItems);

    const totalPrice = useSelector(state => state.cartItems.reduce((total, item) => { return total + (item.price * item.totalQuantity) }, 0));

    return (
        <>
            <div className="cartItems">
                <h2 className="mainColor mb-5 text-center"><b>Cart Items</b></h2>

                <table className="table table-hover text-center">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th style={{ width: "15%" }}>Product</th>
                            <th style={{ width: "15%" }}>Title</th>
                            <th>category</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Add Item</th>
                            <th>Remove Item</th>
                            <th>Remove Product</th>
                        </tr>
                    </thead>

                    <tbody className="item">

                        {
                            (
                                cartItems?.map((item, index) => {
                                    return (
                                        <tr key={item.id}>
                                            <td> {index + 1} </td>
                                            <td> <img src={`imgs/${item.image}`} className="w-25" style={{ height: "100px" }} alt={item.title} title={item.title} /> </td>
                                            <td> {item.title} </td>
                                            <td> {item.category} </td>
                                            <td> <span className="mainColor"> $ {item.price} </span> </td>
                                            <td> {item.totalQuantity} </td>
                                            <td> <button className="btn btn-info" onClick={() => props.addItemsToCart(item, 1)}> + </button> </td>
                                            <td> <button className="btn btn-danger" onClick={() => props.removeQuantityItem(item)}> - </button> </td>
                                            <td> <button className="btn btn-danger ml-2" onClick={() => props.removeProduct(item)}><i className="fas fa-trash" aria-hidden="true"></i></button> </td>
                                        </tr>
                                    )
                                })
                            )
                        }

                    </tbody>
                </table>

                <div className="container d-flex justify-content-between align-items-center">
                    <h2 className="font-weight-bold">Total Price : {Number(totalPrice).toFixed(2)} $</h2>
                    <button className="btn btn-primary w-25" onClick={props.payOrders} >Pay</button>
                </div>

            </div>
        </>
    )
}

export default connect(null, { addItemsToCart, removeQuantityItem, removeProduct, payOrders })(Cart);