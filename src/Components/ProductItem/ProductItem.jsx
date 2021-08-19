import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class ProductItem extends Component {

    render() {
        const { product } = this.props;

        return (
            <div>
                <div className="card my-3 overflow-hidden item" >

                    <img src={`imgs/${product.image}`} className="p-4" height="300" alt={product.title} />

                    <div className="card-body">

                        <h5 className="card-title" style={{ height: "50px" }}>{product.title}</h5>
                        <p className="card-title mainColor">Price : <b className="text-dark">${product.price}</b></p>
                        <p className="card-text mainColor">Category : <b className="text-dark">{product.category}</b></p>

                        <Link to={`/products/${product.id}`} className="btn btnBgColor">Go To Details</Link>
                    </div>

                </div>
            </div>
        )
    }
}

export default ProductItem;