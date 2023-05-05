import React from "react";
import useProductDetails from "../../hooks/productDetail/product_detail_hook";
import { Container, Row, Col, List } from "reactstrap"

const ProductDetailPage = () => {
    const [result] = useProductDetails();
    // const context = useContext("UserContext");

    // console.log(context);

    return <Container>
        <Row>
            <Col md="3">
                <img src={result.pic} alt="product" width="200" height="200" />
            </Col>
            <Col md="9">
                <List type="unstyled">
                    <li>
                        Lorem ipsum dolor sit amet
                    </li>
                    <li>
                        Consectetur adipiscing elit
                    </li>
                    <li>
                        Integer molestie lorem at massa
                    </li>
                    <li>
                        Facilisis in pretium nisl aliquet
                    </li>
                    <li>
                        Nulla volutpat aliquam velit
                        <ul>
                            <li>
                                Phasellus iaculis neque
                            </li>
                            <li>
                                Purus sodales ultricies
                            </li>
                            <li>
                                Vestibulum laoreet porttitor sem
                            </li>
                            <li>
                                Ac tristique libero volutpat at
                            </li>
                        </ul>
                    </li>
                    <li>
                        Faucibus porta lacus fringilla vel
                    </li>
                    <li>
                        Aenean sit amet erat nunc
                    </li>
                    <li>
                        Eget porttitor lorem
                    </li>
                </List>
            </Col>

        </Row>
    </Container>
}

export default ProductDetailPage