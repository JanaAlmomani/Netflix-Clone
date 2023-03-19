import MovieList from "./MovieList";
import { useEffect, useState } from "react";

function Home(){

    const [trendingArr,setTrendingArr]=useState([]);
    const sendReq = async () => {
        const serverURL = `${process.env.REACT_APP_serverURL}/trending`;
        const response = await fetch(serverURL);
        const data = await response.json();
        setTrendingArr(data);
    }
    useEffect(()=>{
        sendReq();
    }, [])

    return(
        <>
        <MovieList trendingArr={trendingArr} />
        </>
    )
}
export default Home;