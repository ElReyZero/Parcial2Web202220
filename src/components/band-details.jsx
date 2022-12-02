import { Card } from "react-bootstrap";

function BandDetails({ band }) {
    if (band) {
        return (<Card style={{ width: '18rem', marginRight: '10px', marginTop: '10px' }}>
            <Card.Img variant="top" src={band.image} />
            <Card.Body>
                <Card.Title>{band.name}</Card.Title>
                <Card.Text>
                    {band.description}
                </Card.Text>
            </Card.Body>
        </Card>)
    }
    else {
        return
    }

}


export default BandDetails;