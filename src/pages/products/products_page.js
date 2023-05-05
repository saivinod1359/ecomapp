import React, { useEffect } from "react";

import Header from "../../components/common/header";
import Menu from "../../components/common/menu";
import Image from "../../components/common/image";

import Products from '../../hoc/products_hoc';
import { getProducts, getShoppingCart } from "../../actions/ecomActions";
import { connect } from 'react-redux';

const ProductsPage = (props) => {
    const products = Products(Menu, Header, Image);

    useEffect(() => {
        console.log(window.a);
        return () => {
            window.a = 0;
        };
    }, [])

    useEffect(() => {
        props.getAllProducts();
        console.log('allProducts: ', props.allProducts)
        // console.log('allProducts: ', )
    }, [props])

    useEffect(() => {
        console.log('allProducts: ', props)
    }, [props])

    return <>
        <h1> Products Page </h1>
        {
            props.allProducts && props.allProducts.length > 0
            && props.allProducts.map((item) => <>
                <p>{item.name}</p>
                <button onClick={() => props.addToCart(item.name)}>Add To Cart</button>
            </>)
        }
        <div style={{ position: "fixed", top: 0, right: 0 }}>
            <p>Shopping Cart: {props.cart.length}</p>
            <ul>
                {
                    props.cart && props.cart.length > 0 && props.cart.map((cartItem, index) => {
                        return <li key="index">{cartItem} </li>
                    })
                }
            </ul>

        </div>

        {/* {products()} */}
    </>
}

const mapStateToProps = (state) => ({
    // allProducts: state.products
    count: state.count,
    allProducts: state.products,
    cart: state.shoppingCart
})

const mapDispatchToProps = (dispatch) => ({
    getAllProducts: () => dispatch(getProducts()),
    addToCart: (name) => dispatch(getShoppingCart(name))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductsPage);

// addition(1)(2)(3);

// function addition(a) {
//     return (b) => {
//         return (c) => {
//             a+b+c
//         }
//     }
// }