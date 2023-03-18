import axios from 'axios';
import { useEffect } from "react";

function DeleteModal(props){

    const sendReq = async () => {
        const serverURL = `https://movies-library-ghzs.vercel.app//deleteMovie/${props.item.id}`;
        const axiosRes= await axios.delete(serverURL);
        props.takenNewArrFromChild(axiosRes.data);
        
        }
    useEffect(() => {
        sendReq();
    }, [])

    return(
        <>
      <p>done</p>
        </>
    )
}
export default DeleteModal;