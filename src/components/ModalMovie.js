import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';


function ModalMovie(props) {
    const [comment, setComment] = useState('');
    const hadellComment = (event) => {
        setComment(event.target.value)
    }
    const postRes = async () => {
        await fetch(`https://movies-library-ghzs.vercel.app/addMovieInfo`,
            {
                method: 'POST',
                body: JSON.stringify(
                    {
                        title: props.movieData.title,
                        release_date: props.movieData.release_date,
                        poster_path: props.movieData.poster_path,
                        overview: props.movieData.overview,
                        commentText: comment
                    }
                ), headers: {
                    'Content-type': 'application/json; charset=UTF-8',

                },
            })
    }

    const style2 = { backgroundColor: 'black' }
    const style3 = { display: 'flex' }
    const style1 = { gap: '10px' }
    
    return (

        <Modal style={{ ...style2 }} Show={props.modalShow} onHide={props.hadellClose}>
            <Modal.Header style={{ backgroundColor: 'gray' }} closeButton>
                <Modal.Title style={{ color: 'yellow' }}>{props.movieData.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body style={{ backgroundColor: 'gray' }}>
                <div style={{ ...style1, ...style3 }}>
                    <Image height={'560px'} src={`https://image.tmdb.org/t/p/original/${props.movieData.poster_path}`} width='50%'></Image>
                    <Modal.Title style={{ fontSize: '15px' }}>
                        {props.movieData.overview}
                    </Modal.Title>
                </div>
                <div>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label style={{ fontSize: '30px' }}>Add Your Comment !</Form.Label>
                        <Form.Control as="textarea" onChange={hadellComment} rows={3} />
                    </Form.Group>
                </div>

            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.hadellClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={() => {
                    alert('Added, Thank You For The Feedback')
                    postRes();

                }}>
                    add to favorite
                </Button>
            </Modal.Footer>
        </Modal>


    )
}
export default ModalMovie;