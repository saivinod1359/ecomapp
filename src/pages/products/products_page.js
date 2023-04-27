import React from "react";

import Header from "../../components/common/header";
import Menu from "../../components/common/menu";
import Image from "../../components/common/image";

import Products from '../../hoc/products_hoc';

const ProductsPage = () => {
    const products =  Products(Menu, Header, Image);
    
    return <>
        <h1> Products Page </h1>
        { products() }
    </>
}

export default ProductsPage;