import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { addItemsToCart, getProduct } from './../../Redux/Actions/Actions';

const Product = (props) => {

    const [product, setProduct] = useState([]);

    const [quantity, setQuantity] = useState(0);

    useEffect(() => {

        let { id } = props.match.params;

        id = Number(id)

        props.getProduct(id).then((product) => setProduct(product)).catch((err) => console.log("Error ==> ", err));

    }, [])//eslint-disable-line

    const handleChange = (e) => {
        const quantity = e.target.value;

        if (quantity < 0)
            setQuantity(0);
        else
            setQuantity(quantity);
    }

    return (
        <>
            <div className="container products">
                <div className="row">

                    <div className="col-md-5 col-sm-4 mb-3">

                        <div className=" overflow-hidden">
                            <h2 className="mb-4 text-primary text-center font-weight-bold">{product.title}</h2>

                            <img height="450px" className="w-100" src={`./../imgs/${product.image}`} alt={product.title} title={product.title} />
                        </div>
                    </div>

                    <div className="col-md-7 col-sm-8" >

                        <table className="table table-borderless table-hover" >

                            <tbody>
                                <tr>
                                    <th className="text-primary" style={{ "width": "100px" }}>Title </th>
                                    <td> {product.title}</td>
                                </tr>
                                <tr>
                                    <th className="text-primary">Price</th>
                                    <td>{Number(product.price).toFixed(2)} $</td>
                                </tr>
                                <tr>
                                    <th className="text-primary">category</th>
                                    <td>{product.category} </td>
                                </tr>
                                <tr>
                                    <th className="text-primary">Description</th>
                                    <td> {product.description}</td>
                                </tr>
                                <tr>
                                    <th className="text-primary" htmlFor="quantity">Quantity</th>
                                    <td><input id="quantity" value={quantity} onChange={handleChange} type="number" className="d-inline form-control w-75" /></td>
                                </tr>
                                <tr>
                                    <th className="text-primary" >TotalPrice</th>
                                    <td>{Number(product.price * quantity).toFixed(2)} $</td>
                                </tr>
                            </tbody>

                            <tfoot>
                                <tr>
                                    <th className="text-primary">Cart</th>
                                    <td> <button onClick={() => props.addItemsToCart(product, quantity)} className="btn btnBgColor w-100">Add To Cart</button> </td>
                                </tr>
                            </tfoot>

                        </table>

                    </div>
                </div>
            </div>
        </>
    )
}

export default connect(null, { addItemsToCart, getProduct })(Product);