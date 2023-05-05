import React, { useEffect, useState, useContext } from "react";
import { Card, CardTitle, CardText, CardBody, CardSubtitle, Button } from "reactstrap";
import { useLocation, useNavigate } from "react-router-dom";
import { utcDate } from "../untils/utcTimeZone";
import { ShoppingCart } from "../context/shopping_cart";

const Products = (MyComponent_1, MyComponent_2, MyComponent_3) => {
    const [loader, setLoader] = useState(false);
    const [products, setProducts] = useState([]);

    // const [cart, setCart] = useState([]);
    const [cart, setCart] = useContext(ShoppingCart);

    const navigate = useNavigate();
    const location = useLocation();
    let product = [];


    useEffect(() => {
        //fetch("./responses/productsList.json")
        setLoader(true);
        fetch("http://localhost:9090/products")
            .then((res) => res.json())
            .then((response) => { //4
                // console.log(response)
                setProducts(response);
                product = response;
                getProducts();
                setLoader(false);
            })
    }, []);

    const getProducts = () => {
        // setInterval(() => {
        //     fetch("http://localhost:9090/products")
        //         .then((res) => res.json())
        //         .then((response) => { // 5
        //             console.log(response, " : ", product)
        //             if(response.length !== product.length) {
        //                 setProducts(response);
        //                 product = response;
        //             } else {
        //                 alert("Same Data")
        //             }
        //         })
        // }, 30000);
    }

    const addToCart = (item) => {
        let cartItems = [...cart];

        cartItems.push(item);
        setCart(cartItems)
    }

    const removeItemFromCart = (e, item) => {
        let pindex = 0;
        let cartItems = [...cart];

        cart.forEach((el, i) => {
            if (el.id === item.id) {
                pindex = i
            }
        });

        cartItems.splice(pindex, 1);
        console.log(cartItems);
        setCart(cartItems)
    }

    const detailBtnHandler = () => {
        navigate("/product/001")
        // location.push = "/product/001"
    }

    return () => {
        return <div>
            <div>
                <strong>{utcDate}</strong> Your Shopping Cart: {
                    cart
                    && cart.map((r) => <span style={{ display: "inline-block", padding: '5px' }}>
                        {r.name}
                        <button onClick={(e) => removeItemFromCart(e, r)}>D</button></span>)}
            </div>

            <div style={{ display: "flex", flexWrap: "wrap" }}>
                {loader && <h1 data-text="It's loading…">It's loading…</h1>}
                {!loader && products.length && products.map((item) => {
                    return <Card
                        style={{
                            width: '14rem',
                            marginLeft: '5px',
                            marginTop: '5px'
                        }}
                    >
                        <MyComponent_3 path={item.pic} />
                        <CardBody>
                            <CardTitle tag="h5">
                                <MyComponent_2 title={item.name} />
                            </CardTitle>
                            <CardSubtitle
                                className="mb-2 text-muted"
                                tag="h6"
                            >
                                {item.price} INR
                            </CardSubtitle>
                            <CardText>
                                <MyComponent_1 msg={item.des} />
                            </CardText>
                            <Button onClick={() => addToCart(item)}>
                                Add To Cart
                            </Button>
                            {/* <Link to={`/product/${item.id}`}> */}
                            <Button onClick={detailBtnHandler}>
                                Details
                            </Button>
                            {/* </Link> */}
                        </CardBody>
                    </Card>
                })}
            </div>
        </div>
    }
}

export default Products;