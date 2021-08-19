import React from 'react'
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

export default function CartIcon() {

    const totalQuantity = useSelector(state => state.cartItems.reduce((total, item) => { return total + item.totalQuantity }, 0));

    const totalPrice = useSelector(state => state.cartItems.reduce((total, item) => { return total + (item.price * item.totalQuantity) }, 0));

    return (
        <>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">

                <ul className="navbar-nav ml-auto">

                    <li className="nav-item cart">
                        <span className="nav-link">$ {Number(totalPrice).toFixed(2)}</span>
                    </li>

                    <li className="nav-item cart position-relative">
                        <NavLink to="/carts" className="nav-link">Cart <i className="fas fa-shopping-cart"></i> </NavLink>
                        <span className="badge badge-info py-2 cart-badge">{totalQuantity}</span>
                    </li>

                </ul>

            </div>
        </>
    )
}
