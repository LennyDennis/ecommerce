import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './Product.css'

const ProductCard = () => {
    return (
        <Card style={{ width: '18rem', margin: '20 px' }}>
            <Card.Img variant="top" src="http://localhost:3001/static/media/1.0c19af20.png" />
            <Card.Body>
                <Card.Title className='ProductTitle' >
                    <p>Test</p>
                    <p>Test</p>
                </Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Add to cart</Button>
            </Card.Body>
        </Card>
    )
}

export default ProductCard