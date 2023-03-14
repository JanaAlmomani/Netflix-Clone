import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import ModalMovie from './ModalMovie';


function Movie(props) {//item it self
    
    const [modalShow, setModalShow] = useState(false);
    const [click, setClick] = useState({});

    const hadellShow = () => {
        setClick(props.item);
        setModalShow(true);
    }
    const hadellClose = () => {
        setModalShow(false);
    }
    return (
        <>
            <Col>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={`https://image.tmdb.org/t/p/original/${props.item.poster_path}`} />
                    <Card.Body>
                        <Card.Title>{props.item.title}</Card.Title>
                        <Card.Text>
                            {props.item.release_date}
                        </Card.Text>
                        <Card.Text>
                            {props.item.overview}
                        </Card.Text>
                        <Button variant="primary" onClick={hadellShow}>add to favorite</Button>
                    </Card.Body>
                </Card>
            </Col>
            <ModalMovie show={modalShow} close={hadellClose} movieData={click}/>
        </>

    )

}
export default Movie;