// src\pages\Actors\index.js
//https://api.themoviedb.org/3/person/popular

import  { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

export default function Index() {
  const l = console.log;
  const assetsUrl = "https://image.tmdb.org/t/p/original";
  const [actors, setActors] = useState([]);

  useEffect(() => {
    const apiKey = process.env.NEXT_PUBLIC_API_KEY;
    const url = "https://api.themoviedb.org/3/person/popular";
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: "Bearer " + apiKey,
      },
    };
    function getActors() {
      fetch(url, options)
        .then((res) => res.json())
        .then((json) => {
          if (json) {
            setActors(json.results);
            l(json);
          }
        })
        .catch((err) => console.error("error:" + err));
    }

    getActors();
  }, []);

  return (
    <div className="bg-gray-800 p-6 text-surface" >
      <Head>
        <title>Actors Page </title>
      </Head>
      <div>
        <div className="flex  flex-wrap">
          {actors.map((item, index) => {
            const path = "/Actors/" + item.id;
            return (
              <div
                className="m-1 p-bl-50 p-br-50 basis-1/4 rounded-t-lg rounded-b-lg bg-gray-900  shadow-secondary-1 dark:bg-surface-dark"
                key={item.id}
              >
                <Link
                  className="text-center p-1 text-blue-500 shadow-lg justify-center"
                  href={path}
                  key={index}
                >
                  <div className="m-b-2 dark:bg-surface-dark size-auto">
                    <div className="flex items-center justify-center">
                      <img
                        src={assetsUrl + item.profile_path}
                        alt="backdrop_path"
                        className="w-150 h-150 rounded-t-full rounded-b-full shadow-b-3xl"
                      />
                    </div>
                  </div>
                  <div  className="text-center font-bold pt-2">{item.name}</div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
