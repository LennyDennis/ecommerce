import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './Product.css'


const ProductDetails = ({ product }) => {
    return (
        <div className='productDetailCard'>
            <div>
                <h3>Product Details</h3>
            </div>
            <Card style={{ width: '20%' }}>
                <div style={{ display: 'flex' }}>
                    <Card.Img fluid="true" variant="top" src={require(`../../assets/images/${product.image}.png`)} />
                    <Card.Body>
                        <Card.Title>{product.name}</Card.Title>
                        <Card.Text>{product.price}</Card.Text>
                        <Card.Text>
                            {product.description}
                        </Card.Text>
                        <Card.Text>
                            Free Shipping
                        </Card.Text>
                        <Button variant="primary" size="lg">
                            Add to cart
                        </Button>
                    </Card.Body>
                </div>

            </Card>
        </div>

    )
}

export default ProductDetails