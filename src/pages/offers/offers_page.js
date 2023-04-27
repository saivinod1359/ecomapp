import React from "react";

import Header from "../../components/common/header";
import Menu from "../../components/common/menu";
import Image from "../../components/common/image";


import Offers from '../../hoc/offers_hoc';

const OffersPage = () => {
    const offers =  Offers(Menu, Header, Image);
    
    return <>
        <h1> Offers Page </h1>
        { offers() }
    </>
}

export default OffersPage;