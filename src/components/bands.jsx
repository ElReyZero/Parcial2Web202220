import { Container, Row, Col, Table } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';
import BandDetails from './band-details';
import "./css/bands.css";

const { useState, useEffect } = require("react");


function Bands() {

    const [bands, setBands] = useState([]);
    const [selectedBand, setSelectedBand] = useState(null);

    useEffect(() => {
        fetch("https://gist.githubusercontent.com/josejbocanegra/806a4dcd1af61b4cc498d24c52e84320/raw/8711b7af9091d2831ed043563cad2a61311b0a5f/music-bands.json")
            .then(response => response.json())
            .then(data => setBands(data));
    }, []);

    const currentYear = new Date().getFullYear()
    let oldestBand;
    if (bands.length !== 0) {
        oldestBand = bands.reduce(function (prev, curr) {
            return prev.foundation_year < curr.foundation_year ? prev : curr;
        });
    }
    else {
        oldestBand = { foundation_year: currentYear };
    }


    function selectBand(band) {
        setSelectedBand(band);
    }

    return (
        <Container>
            <Row>
                <Col className="col-sm-7">
                    <br /><br />
                    <Table striped hover id="table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th><FormattedMessage id="bandName" /></th>
                                <th><FormattedMessage id="bandCountry" /></th>
                                <th><FormattedMessage id="bandGenre" /></th>
                                <th><FormattedMessage id="bandYear" /></th>
                            </tr>
                        </thead>
                        <tbody>
                            {bands.map((item) => (
                                <tr key={item.id}>
                                    <td key={item.id + " id"} onClick={() => selectBand(item)}>{item.id}</td>
                                    <td key={item.id + " name"} onClick={() => selectBand(item)}>{item.name}</td>
                                    <td key={item.id + " country"} onClick={() => selectBand(item)}>{item.country}</td>
                                    <td key={item.id + " genre"} onClick={() => selectBand(item)}>{item.genre}</td>
                                    <td key={item.id + " year"} onClick={() => selectBand(item)}>{item.foundation_year}</td>
                                </tr>))}
                        </tbody>
                    </Table>
                    <p><FormattedMessage id="oldestBand1" /> <b>{oldestBand.name}</b> <FormattedMessage id="oldestBand2" /> {currentYear - oldestBand.foundation_year} <FormattedMessage id="oldestBand3" /></p>
                </Col>
                <Col className="col-md-auto">
                    <br />
                    <BandDetails band={selectedBand} />
                </Col>
            </Row>

        </Container>
    )

}


export default Bands;