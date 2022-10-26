import React from 'react'
import ProductCheckOut from './ProductCheckOut';
// import ProductCard from './ProductCard'
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import ProductDetails from './ProductDetails';

const Product = ({ productList }) => {
    return (
        <div style={styling} className="row" >
            {/* {productList.length > 0 ?
                <ProductDetails product={productList[0]} /> : ""} */}
            {productList.length > 0 ?
                <ProductCheckOut product={productList[0]} /> : ""}
            {/* <Row>
                {productList.map((product) => (
                    <Col md={3}>
                        <ProductCard key={product.id} product={product} />
                    </Col>
                ))}
            </Row> */}
        </div >
    )


}

const styling = {
    display: 'flex'
}

export default Product