import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

function UpdateModal(props){

const updateMovies = async(e)=>{
     e.preventDefault();

    const obj={
        title: e.target.title.value,
        release_date: e.target.release_date.value,
        poster_path: e.target.poster_path.value,
        overview: e.target.overview.value,
        commentText: e.target.commenttext.value
    }
    
    const serverURL=`https://movies-library-ghzs.vercel.app/updateMovie/${props.item.id}`;
    const axiosRes= await axios.put(serverURL,obj);
    props.closeUpdateModal();
    props.takenNewArrFromChild(axiosRes.data);
    // console.log(obj);
}

    return(
        <Modal show={props.updateFlag} onHide={props.closeUpdateModal}>
        <Modal.Header closeButton>
            <Modal.Title>Update Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form onSubmit={updateMovies}>
                <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control name="title" type="text" defaultValue={props.item.title}/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Image Path</Form.Label>
                    <Form.Control name="poster_path" type="text" defaultValue={props.item.poster_path}/>
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>Overview</Form.Label>
                    <Form.Control name="overview" type="text" defaultValue={props.item.overview}/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Release Date</Form.Label>
                    <Form.Control name="release_date" type="date" defaultValue={props.item.release_date}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Comment Text</Form.Label>
                    <Form.Control name="commenttext" type="text" defaultValue={props.item.commenttext}/>
                </Form.Group>
                
                <Button variant="primary" type="submit">  
                    Submit
                </Button>
            </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={props.closeUpdateModal}>
                Close
            </Button>
        </Modal.Footer>
    </Modal>
    )
}
export default UpdateModal;