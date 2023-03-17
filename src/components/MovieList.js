import Row from 'react-bootstrap/Row';
import Movie from "./Movie";

function MovieList(props) {
    return (
        <>
            <Row xs={1} md={4} className="g-4">
                {props.trendingArr.map((item) => {
                    return (<Movie item={item}  key={item.id}/>)
                })}
            </Row>
        </>

    );
}
export default MovieList;