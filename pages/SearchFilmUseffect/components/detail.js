import React, { useState, useEffect } from "react";
import { Button } from "antd";
import { getDataMoviesById } from "../services/api";
import { useParams } from "react-router-dom";

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
    <div style={{display: "flex"}}>
      {dataMovies.length > 0 ? (
        <div>
          <img src={dataMovies.Poster} alt="logo" />
          <div>
            <h1>{dataMovies.Title}</h1>
            <p>{dataMovies.Writer}</p>
            <p>{dataMovies.Year}</p>
            <Button>Back To Movies</Button>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default DeatilFilm;
