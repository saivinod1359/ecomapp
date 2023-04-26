import React, { useEffect, useState } from 'react';
import Login from '../../components/login_form';
import { Table, Button, Modal, ModalHeader, ModalBody, ModalFooter, Tooltip } from 'reactstrap';
import ErrorBoundary from '../../hoc/errorBoundaries';

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
                console.log(data);
                setTableData(data)
            })
    }, []);

    return <>
        <h1> Dashboard </h1>
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