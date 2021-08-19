import React from 'react'
import { NavLink } from 'react-router-dom'
import CartIcon from './CartIcon'

export default function Navbar() {

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark mainBgColor py-3 fixed-top">

                <div className="container">

                    <NavLink className="navbar-brand font-weight-bold" to="/">Shopping Online</NavLink>

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <CartIcon />

                </div>

            </nav>
        </>
    )
}