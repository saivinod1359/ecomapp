import React, { useEffect, useState } from "react";
import { Card, CardTitle, CardText, CardBody, CardSubtitle, Button } from "reactstrap";
import { utcDate } from "../untils/utcTimeZone";

const Products = (MyComponent_1, MyComponent_2, MyComponent_3) => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch("./responses/productsList.json")
            .then((res) => res.json())
            .then((response) => {
                console.log(response)
                setProducts(response);
            })
    }, []);

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

                {products.length && products.map((item) => {
                    return <Card
                        style={{
                            width: '18rem',
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
                        </CardBody>
                    </Card>
                })}
            </div>
        </div>
    }
}

export default Products;