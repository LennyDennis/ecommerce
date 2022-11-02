import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { AiOutlineShoppingCart, AiFillShopping } from "react-icons/ai";

import './Product.css'


const ProductCard = ({ product }) => {
    return (
        <Card className='ProductCard'>
            <Card.Img className='img-fluid card-img-top' variant="top" src={require(`../../assets/images/${product.image}.png`)} />
            <Card.Body className="ProductDetail">
                <Card.Title className='ProductTitle' >
                    <p className='ProductText'>{product.name}</p>
                    <p>{product.price}</p>
                </Card.Title>
                <Card.Text className='ProductText'>
                    {product.description}
                </Card.Text>
                <div className='ProductButtons'>
                    <Button variant="secondary">
                        <AiOutlineShoppingCart className='IconButton' />
                        View Product
                    </Button>{' '}
                    <Button variant="primary">
                        <AiFillShopping className='IconButton' />
                        Add to cart
                    </Button>
                </div>


            </Card.Body>
        </Card >
    )
}

export default ProductCard