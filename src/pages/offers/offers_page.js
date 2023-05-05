import React, { useEffect } from "react";
import { connect } from "react-redux";
import Header from "../../components/common/header";
import Menu from "../../components/common/menu";
import Image from "../../components/common/image";

import { getAllOffers, getShoppingCart } from "../../actions/ecomActions";

import Offers from '../../hoc/offers_hoc';

const OffersPage = (props) => {
    // const offers =  Offers(Menu, Header, Image);

    useEffect(() => {
        console.log(window.a);
        return () => {
            window.a = 0;
        };
    }, [])


    useEffect(() => {
        console.log("allOffers: ", props.allOffers);
        if(props.allOffers.length === 0) {
            props.getAllOffers();
        }
    }, [props.allOffers])

    return <>
        <h1> Offers Page </h1>
        {
            props.allOffers && props.allOffers.length && props.allOffers.map((item, index) => {
                return <>
                    <h2 key={index}>{item.name}</h2>
                    <button onClick={() => props.addToCart(item.name)}>Add To Cart</button>
                </>
            })
        }

        <div style={{ position: "fixed", top: 0, right: 0 }}>
            <p>Shopping Cart: {props.cart.length}</p>
            <ul>
                {
                    props.cart && props.cart.length > 0 && props.cart.map((cartItem, index) => {
                        return <li key="index">{cartItem}</li>
                    })
                }
            </ul>

        </div>
        {/* { offers() } */}
    </>
}

const mapStateToProps = (state) => ({
    allOffers: state.offers,
    cart: state.shoppingCart
})

const mapDispatchToProps = (dispatch) => ({
    getAllOffers: () => dispatch(getAllOffers()),
    addToCart: (name) => dispatch(getShoppingCart(name))
})


export default connect(mapStateToProps, mapDispatchToProps)(OffersPage);