import React, { useEffect } from 'react'
import { connect, useSelector } from 'react-redux';
import { getProducts } from './../../Redux/Actions/Actions';
import ProductItem from './../../Components/ProductItem/ProductItem';

const Products = (props) => {

    // get Products From Reducer
    const products = useSelector(state => state.products)

    useEffect(() => {
        props.getProducts();
    }, [])//eslint-disable-line

    return (
        <>
            <div className="container products">
                <div className="row">
                    {
                        products?.map((product) => {
                            return (
                                <div className="col-4" key={product.id} >
                                    <ProductItem product={product} />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default connect(null, { getProducts })(Products);