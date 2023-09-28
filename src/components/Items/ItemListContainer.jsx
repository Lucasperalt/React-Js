import React, { useState, useEffect } from "react";
import { Row } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import ItemList from './ItemList'
import useFetch from "../Hooks/useFetch";
const ItemListContainer = ({ greeting }) => {
    const [items] = useFetch("https://fakestoreapi.com/products")
    return (

        <Container>
            <Row>
                {
                    items !== null &&
                    <ItemList items={items} />
                }
            </Row>
            <div className="">
                <h1>{greeting}</h1>
            </div>
        </Container>)

}
export default ItemListContainer