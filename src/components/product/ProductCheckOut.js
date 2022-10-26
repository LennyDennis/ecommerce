import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './Product.css'

const ProductCheckOut = ({ product }) => {
    return (
        <Card style={{ width: 'auto' }}>
            <div style={{ display: 'flex' }}>
                <Card.Img fluid="true" variant="top" src={require(`../../assets/images/${product.image}.png`)} />
                <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>{product.price}</Card.Text>
                </Card.Body>
                <Card.Body style={{ borderLeft: '1px solid' }} >
                    <Card.Text>{product.price}</Card.Text>
                    <Card.Text>
                        Free Shipping
                    </Card.Text>
                    <Button variant="primary" size="lg">
                        Add to cart
                    </Button>
                </Card.Body>
            </div>

        </Card>
    )
}

export default ProductCheckOut