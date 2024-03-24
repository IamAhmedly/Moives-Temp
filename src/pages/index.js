"use client";
// src\pages\index.js
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Index() {
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;
  console.log(apiKey);
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const url =
    "https://api.themoviedb.org/3/discover/movie?sort_by=release_date.desc";
  // "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc";
  const assetsUrl = "https://image.tmdb.org/t/p/original";
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: "Bearer " + apiKey,
    },
  };
  console.log(apiKey);
  function getMovieRequest() {
    fetch(url, options)
      .then((res) => res.json())
      .then((json) => {
        // console.log(options.headers);
        console.log(apiKey);
        if (json) {
          setMovies(json.results);
        }
        // console.log(JSON.stringify(json));
      })
      .catch((err) => console.error("error:" + err));
  }
  useEffect(() => {
    getMovieRequest();
  }, [searchValue]);

  return (
    <div className="bg-gray-800 p-6 text-surface">
      <Head>
        <title>Home Page </title>
      </Head>
      <div>
        {/* <Image
          src={assetsUrl+item.backdrop_path}
          alt="dvf"
          className="w-20"
          width={100}
          height={100}
        /> */}
        {/* <div className="w-52 h-28">
                  <img
                    src={assetsUrl + item.backdrop_path}
                    alt="backdrop_path"
                    className="w-52 h-auto"
                  />
                </div> */}
        <div className="flex flex-wrap">
          {movies.map((item, index) => {
            const path = "/Movies/" + item.id;
            return (
              <div
                // this is the single movie container rounded-tl-lg rounded-br-lg
                className="m-1 p-bl-50 p-br-50 basis-1/4 rounded-t-lg rounded-b-lg bg-gray-900  shadow-secondary-1 dark:bg-surface-dark "
                key={item.id}
              >
                <div className="m-b-2 dark:bg-surface-dark size-auto">
                  <img
                    src={assetsUrl + item.poster_path}
                    alt="backdrop_path"
                    className="rounded-t-lg rounded-b-full shadow-b-3xl"
                  />
                </div>

                <div className="h-3 text-center">{item.adult && <span> +18</span>}</div>

                <Link
                  className="text-center p-1 text-blue-500 shadow-lg justify-center"
                  href={path}
                  key={index}
                >
                  {item.title}
                </Link>
                <div className="m-2">
                  <div className="flex justify-between  text-white font-bold">
                    <div className="text-left  text-white font-bold from-neutral-300 shadow-lg">Genre ID:   </div>
                    <div className="inline-block text-right font-thin ">{item.genre_ids} </div> 
                  </div>
                  <div className="flex justify-between  text-white font-bold">
                    <div className="text-left  text-white font-bold shadow-lg">ID:           </div>
                    <div className="inline-block text-right font-thin ">{item.id}</div>
                  </div>
                  <div className="flex justify-between  text-white font-bold">
                    <div className="text-left  text-white font-bold shadow-lg">Original_language: </div>
                    <div className="inline-block text-right font-thin ">{item.original_language}</div>
                  </div>

                  <div className="flex justify-between  text-white font-bold">
                    <div className="text-left  text-white font-bold shadow-lg">Original_title: </div>
                    <div className="inline-block text-right font-thin ">{item.original_title}</div>
                  </div>

                  <div className="flex justify-between  text-white font-bold">
                    <div className="text-left  text-white font-bold shadow-lg">Popularity: </div>
                    <div className="inline-block text-right font-thin ">{item.popularity}</div>
                  </div>


                  <div className="flex justify-between  text-white font-bold">
                    <div className="text-left  text-white font-bold shadow-lg">Release date: </div>
                    <div className="inline-block text-right font-thin ">{item.release_date}</div>
                  </div>


                  <div className="flex justify-between  text-white font-bold">
                    <div className="text-left text-white font-bold shadow-lg">Overview: </div>
                    <div className="inline-block text-left font-thin ">{item.overview}</div>
                  </div>


                  <div className="flex justify-between  text-white font-bold">
                    <div className="text-left  text-white font-bold">  </div>
                    <div className="inline-block text-right font-thin "></div>
                  </div>


                  <div className="flex justify-between  text-white font-bold">
                    <div className="text-left  text-white font-bold shadow-lg">release date: </div>
                    <div className="inline-block text-right font-thin ">{item.release_date}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
