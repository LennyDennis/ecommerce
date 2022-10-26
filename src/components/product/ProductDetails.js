import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { AiOutlineShoppingCart, AiFillShopping } from "react-icons/ai";
import './Product.css'


const ProductDetails = ({ product }) => {
    return (
        <div className='ProductDetailCard'>
            <Card >
                <div style={{ display: 'flex' }}>
                    <Card.Img className='ProductDetailImage' src={require(`../../assets/images/${product.image}.png`)} />
                    <Card.Body>
                        <h5>Name : </h5>
                        <h4>{product.name}</h4><br />
                        <h5>Price : </h5>
                        <h5>{product.price}</h5><br />
                        <h5>Description : </h5>
                        <p>{product.description}</p><br />
                        <h5>Free Shipping</h5><br />
                        <Button variant="primary" size="lg">
                            <AiOutlineShoppingCart style={{ marginRight: "10px" }} />
                            Add to cart
                        </Button>
                    </Card.Body>
                </div>

            </Card>
        </div>

    )
}

export default ProductDetails