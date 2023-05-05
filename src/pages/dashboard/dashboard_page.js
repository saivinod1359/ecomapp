import React, { useEffect, useState } from 'react';
import Login from '../../components/login_form';
import { Table, Button, Modal, ModalHeader, ModalBody, ModalFooter, Tooltip } from 'reactstrap';
import ErrorBoundary from '../../hoc/errorBoundaries';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import shop_1 from "../../assests/shop_1.jpg";
import shop_2 from "../../assests/shop_2.jpg";
import shop_3 from "../../assests/shop_3.jpg";

import "./dashboard_page.css";

const DashboardPage = () => {
    const [tableData, setTableData] = useState([])
    const [modal, setModal] = useState(false);
    const [tooltipOpen, setTooltipOpen] = useState(false);

    const toggle = () => setModal(!modal);
    const toolTipToggle = () => setTooltipOpen(!tooltipOpen);

    useEffect(() => {
        fetch('./responses/productsList.json')
            .then((res) => res.json())
            .then((data) => {
                setTableData(data)
            })
    }, []);

    return <>
        <h1> Dashboard </h1>
        <h3>Welcome</h3>
        <Carousel>
            <div className="carousel_block">
                <img src={shop_1} />
                <p className="legend">Legend 1</p>
            </div>
            <div className="carousel_block">
                <img src={shop_2} />
                <p className="legend">Legend 2</p>
            </div>
            <div className="carousel_block">
                <img src={shop_3} />
                <p className="legend">Legend 3</p>
            </div>
        </Carousel>
        <Table striped>
            <thead>
                <tr>
                    <th>
                        #
                    </th>
                    <th>
                        ID
                    </th>
                    <th>
                        Mobile Name
                    </th>
                    <th>
                        Price
                    </th>
                </tr>
            </thead>
            <tbody>
                {
                    tableData && tableData.map((item, index) => {
                        return <tr>
                            <th scope="row">
                                {index + 1}
                            </th>
                            <td>
                                {item.id}
                            </td>
                            <td>
                                <Tooltip
                                    isOpen={tooltipOpen}
                                    target="TooltipExample"
                                    toggle={toolTipToggle}
                                    placement="right"
                                >
                                    <img src={item.pic} width="100" height="100" />
                                </Tooltip>
                                <a
                                    href="javascript:void(0)"
                                    target="_blank"
                                    rel="noreferrer"
                                    id="TooltipExample"
                                >
                                    {item.name}
                                </a>
                            </td>
                            <td>
                                {item.price}
                            </td>
                        </tr>
                    })

                }
            </tbody>
        </Table>
        <Button color="danger" onClick={toggle}>
            Click Me
        </Button>
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Modal title</ModalHeader>
            <ModalBody>
                <ErrorBoundary>
                    <Login />
                </ErrorBoundary>
            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={toggle}>
                    LOGIN
                </Button>{' '}
                <Button color="secondary" onClick={toggle}>
                    Cancel
                </Button>
            </ModalFooter>
        </Modal>
    </>
}

export default DashboardPage;