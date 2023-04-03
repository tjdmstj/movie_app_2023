import React ,{useEffect} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Detail.css";

function Detail(){
    const location = useLocation();
    const navigation = useNavigate();
    useEffect ( () =>{
        if(location.state ==null){
            navigation("/");
        }
    }
    );
    function Show(){
        const text = document.getElementsByClassName("movie__summary");
        const summary = location.state.summary;
        text[0].innerHTML= summary;
    }
     if(location.state){
        const title = location.state.title;
        const year = location.state.year;
        const poster = location.state.poster;
        const summary = location.state.summary;

        return (
            <div className="movie-datail">
                <img src={poster} alt={title} title={title} />
                <div className="movie__data">
                    <h3 className="movie__title">
                        {title}
                    </h3>
                    <h5 className="movie__year">{year}</h5>
                    <ul className="movie__genres">
                            {location.state.genres.map((genre,index)=>{
                                return <li key={index} className="movie__genre">{genre}</li>;
                            })}
                        </ul>
                    <p className="movie__summary" onClick={Show}>{summary.slice(0,180)}...</p>
                </div>
        </div>
         )
     }else{
        return null;
     }

}

export default Detail;