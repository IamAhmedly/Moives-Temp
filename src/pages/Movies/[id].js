// src\pages\Movies\[id].js

import { useRouter } from "next/router";
import Head from "next/head";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Movie() {
  const l = console.log;
  const router = useRouter();
  const { id } = router.query;
  const assetsUrl = "https://image.tmdb.org/t/p/original";
  const [movie, setMovie] = useState({});
  const [directors, setDirectors] = useState([]);
  const [cast, setCast] = useState([]);

  const Movie = {
    adult: false,
    backdrop_path: null,
    belongs_to_collection: {
      id: 87096,
      name: "Avatar Collection",
      poster_path: "/uO2yU3QiGHvVp0L5e5IatTVRkYk.jpg",
      backdrop_path: "/gxnvX9kF7RRUQYvB52dMLPgeJkt.jpg",
    },
    budget: 500000000,

    homepage: "https://www.avatar.com/movies",
    id: 216527,
    imdb_id: "tt3095356",
    original_language: "en",
    original_title: "Avatar 4",
    overview: "",
    popularity: 33.31,
    poster_path: "/xGcd3ob2DWC3TmlVhnJg1RLyTGi.jpg",

    release_date: "2029-12-20",
    revenue: 0,
    runtime: 0,

    status: "In Production",
    tagline: "",
    title: "Avatar 4",
    video: false,
    vote_average: 0,
    vote_count: 0,
  };

  useEffect(() => {
    if (!id) return;
    setMovie(Movie);
    const apiKey = process.env.NEXT_PUBLIC_API_KEY;
    const url =
      "https://api.themoviedb.org/3/movie/" +
      id +
      "?append_to_response=credits";
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: "Bearer " + apiKey,
      },
    };
    function getMovie() {
      if (!id) return "";
      fetch(url, options)
        .then((res) => res.json())
        .then((json) => {
          if (json) {
            setMovie(json);
            // director
            const getDirectorsFromCrew = (crew) => {
              return crew
                .filter((member) => {
                  return member.job == "Director";
                })
                .map((director) => {
                  return { name: director.name, id: director.id };
                });
            };
            const directors = getDirectorsFromCrew(json.credits.crew);
            setDirectors(directors);
            // Cast
            const getCast = (cast) => {
              return cast.filter((actor) => {
                return actor.order < 5;
              });
            };
            const Casts = getCast(json.credits.cast);
            setCast(Casts);
            l(cast); 
          }
        })
        .catch((err) => console.error("error:" + err));
    }
    getMovie();
  }, [id]);

  return (
    <div>
      <Head>
        <title>Movie id </title>
      </Head>
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-row ">
          <div className=" flex-1 w-[20%]">
            <div className="poster_card border border-amber-50 rounded-xl border-solid overflow-hidden m-2">
              <img src={assetsUrl + movie.poster_path} alt={movie.title} />
            </div>
          </div>
          <div className=" flex-5 w-[80%] m-2">
            <h1 className="font-bold">{movie.title}</h1>
            <h1 className=" ">Release date: {movie.release_date}</h1>
            <h1 className=" ">Runtime: {movie.runtime}</h1>
            <h1 className=" ">Language: {movie.original_language}</h1>
            <h1 className=" ">Movie rating: {movie.vote_count}</h1>
            <h1 className=" ">
              Director&apos;s :
              {directors
                ? directors.map((director) => {
                    const href = "/Actors/" + director.id;
                    return (
                      <Link key={director.id} href={href}>
                        {director.name}
                      </Link>
                    );
                  })
                : ""}
            </h1>

            <h1 className=" ">Overview : </h1>
            <h1 className=" ">
              {movie.overview
                ? movie.overview
                : "the Movie don't have overview yet"}{" "}
            </h1>
            <h1 className=" ">Cast : </h1>

            <h1 className="flex ">
              {cast.map((actor) => {
                const href = "/Actors/" + actor.id;
                return ( 
                  <div className="flex flex-col m-1" key={actor.cast_id}>
                    <Link href={href} className=" ">
                      {actor.name} ,
                    </Link>
                   {actor.profile_path? <img
                      src={assetsUrl + actor.profile_path}
                      width="70" title={"As: "+actor.character}
                      className="inline"
                    />:<img width="70" src="/imgs/ph.jpg" title={"As: "+actor.character}/>}
                  </div>
                );
              })}
            </h1>
          </div>
        </div>
        <h1>Movie id = {id}</h1>
        <pre className="whitespace-pre-wrap">
           
          10. A related movies section which includes at least five related
          movies (Use the API for this)
          <br />
          11. A trailer section that has the movie trailer from youtube
          <br />
          12. The movie production company name and logo.
          <br />
          2. Functionality:
          <br />
          1. Clicking an actor in the main actors should go to the single actor
          page.
          <br />
          2. Clicking on a movie in the related movies section should take you
          to the Single movie page (#3)
          <br />
        </pre>
      </div>
    </div>
  );
}
