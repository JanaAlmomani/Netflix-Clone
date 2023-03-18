import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import UpdateModal from './UpdateModal';
import DeleteModal from "./DeleteModal";


function FavList() {
    const [favArr, setFavArr] = useState([]);
    const [updateFlag, setUpdateFlag] = useState(false);
    const [clickMovie, setClickMovie] = useState({})

    const showUpdateModal = (item) => {
        setUpdateFlag(true);
        setClickMovie(item);
    }

    const closeUpdateModal = () => {
        setUpdateFlag(false);
    }

    const sendReq = async () => {
        const serverURL = `https://movies-library-ghzs.vercel.app/getMovies`;
        const response = await fetch(serverURL);
        const data = await response.json();
        setFavArr(data);
    }
    useEffect(() => {
        sendReq();
    }, [])

    const takenNewArrFromChild = (arr) => {
        setFavArr(arr);
    }
    const showDeletedModal=(arr)=>{
        setFavArr(arr);
        
    }

    return (
        <>

            <Row xs={1} md={4} className="g-4">
                {favArr.map((item) => {
                    return <Col key={item.id}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={`https://image.tmdb.org/t/p/original/${item.poster_path}`} />
                            <Card.Body>
                                <Card.Title>{item.title}</Card.Title>
                                <Card.Text>{item.overview}</Card.Text>
                                <Card.Text>{item.release_date}</Card.Text>
                                <Card.Text>{item.commenttext} </Card.Text>
                                <Button variant="success" onClick={() => { showUpdateModal(item) }} >Update</Button>
                                <Button variant="danger" onClick={showDeletedModal}>Delete</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                })}
            </Row>
            <UpdateModal updateFlag={updateFlag} closeUpdateModal={closeUpdateModal} item={clickMovie}

                takenNewArrFromChild={takenNewArrFromChild} />
            <DeleteModal  takenNewArrFromChild={takenNewArrFromChild} item={clickMovie}/>
        </>
    )
}
export default FavList;