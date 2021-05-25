import React, { useState, useEffect } from "react";
import { Button } from "antd";
import { getDataMoviesById } from "../services/api";
import { useParams, Link } from "react-router-dom";

function DeatilFilm(props) {
  const { id } = useParams();
  const [dataMovies, setDataMovies] = useState({});

  useEffect(() => {
    const getData = async () => {
      const data = await getDataMoviesById(id);
      if (data) {
        setDataMovies(data);
        console.log(data);
      }
    };
    getData();
  }, [id]);

  return (
    <div style={{ display: "flex", margin: '80px'}}>
      <img src={dataMovies.Poster} alt="logo" style={{width: "380px", height: "560px"}} />
      <div style={{marginLeft: '40px'}}>
        <h1 style={{fontSize: "40px"}}>{dataMovies.Title}</h1>
        <p style={{fontSize: "20px", color: "black"}}>{dataMovies.Writer}</p>
        <p style={{fontSize: "20px", color: "black", fontWeight: "bold"}}>{dataMovies.Year}</p>
        <Button type="primary" style={{fontSize: "20px", width: "auto", height: "auto"}}><Link to="/SearchFilmUseffect">Back To Movies</Link></Button>
      </div>
    </div>
  );
}

export default DeatilFilm;
