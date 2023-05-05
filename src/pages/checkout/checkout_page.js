import React, { useContext, useEffect, useState } from "react";
import { ShoppingCart } from "../../context/shopping_cart";

const CheckoutPage = () => {
    const [cart, setCart] = useContext(ShoppingCart);
    const [total, setTotal] = useState(0);
    const [gst, setGst] = useState(0);

    useEffect(() => {
        let totalValue = 0;
        let gstValue = 0;

        console.log(totalValue)
        cart.map((item) => {
            gstValue = (((totalValue) * 18)/100)
            totalValue = ((gstValue + totalValue + parseInt(item.price)));
        })

        setGst(gstValue)
        setTotal(totalValue);
    }, [])

    return <>
        <h2>Checkout</h2>
        {cart.length === 0 && <p> Your Cart is Empty</p>}
        {cart.length > 0 && <table>
            <tr>
                <th> Product Name</th>
                <th> Price</th>
            </tr>
            {
                cart.map((item) => {
                    return <tr>
                        <td>{item.name}</td>
                        <td>{item.price}</td>
                    </tr>
                })
            }
            <tr>
                <td>GST(18%)</td>
                <td>{gst}</td>
            </tr>
            <tr>
                <td>Total</td>
                <td>{ total }</td>
            </tr>
        </table>
        }
    </>
}

export default CheckoutPage;