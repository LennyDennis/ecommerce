import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { AiOutlineClose } from "react-icons/ai";

import './Product.css'

const ProductCheckOut = ({ product }) => {
    return (
        <div className='checkoutProduct'>
            <div className='checkoutProductImage'>
                <img src={require(`../../assets/images/${product.image}.png`)} />
            </div>
            <div className='checkoutProductDetails'>
                <div className='checkoutProductDetailsOne'>
                    <h5>{product.name}</h5>
                    <p style={{ marginTop: "20px" }}>{product.description}</p>
                </div>
                <div className='checkoutProductDetailsTwo'>
                    <h5>{product.price}</h5>
                    <Button variant="secondary" style={{ marginTop: "20px" }}>
                        <AiOutlineClose style={{ marginRight: "10px" }} />
                        Remove from cart
                    </Button>{' '}
                </div>

            </div>
        </div>


        // <Card style={{ width: 'auto' }}>
        //     <div style={{ display: 'flex' }}>
        //         <Card.Img fluid="true" variant="top" src={require(`../../assets/images/${product.image}.png`)} />
        //         <Card.Body>
        //             <Card.Title>{product.name}</Card.Title>
        //             <Card.Text>{product.price}</Card.Text>
        //         </Card.Body>
        //         <Card.Body style={{ borderLeft: '1px solid' }} >
        //             <Card.Text>{product.price}</Card.Text>
        //             <Card.Text>
        //                 Free Shipping
        //             </Card.Text>
        //             <Button variant="primary" size="lg">
        //                 Add to cart
        //             </Button>
        //         </Card.Body>
        //     </div>

        // </Card>
    )
}

export default ProductCheckOut