import React from 'react'
import { useState, useEffect } from 'react'
import ProductCheckOut from './ProductCheckOut';
import ProductCard from './ProductCard'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProductDetails from './ProductDetails';

const Product = () => {
    const [products, setProducts] = useState([])
    const baseUrl = 'http://localhost:5000/products'

    useEffect(() => {
        const getProducts = async () => {
            const productsFromServer = await fetchProducts()
            setProducts(productsFromServer)
        }

        getProducts()
    }, [])

    const fetchProducts = async () => {
        console.log("help")
        const res = await fetch(baseUrl)
        const data = await res.json()
        return data;
    }

    return (
        <div style={styling} className="row Products" >
            {/* {products.length > 0 ?
                <ProductDetails product={products[0]} /> : ""} */}
            {/* {products.length > 0 ?
                < ProductCheckOut product={products[0]} /> : ""} */}
            {products.length > 0 ?
                <Row>
                    {products.map((product) => (
                        <Col md={3}>
                            <ProductCard key={product.id} product={product} />
                        </Col>
                    ))}
                </Row> : "No products exist "}
        </div >
    )


}

const styling = {
    display: 'flex'
}

export default Product