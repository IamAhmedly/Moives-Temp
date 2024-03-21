// src\pages\Actors\[id].js

import { useRouter } from "next/router";
import Head from "next/head";

export default function Movie() {
  const router = useRouter();
  const { id } = router.query;
  console.log(id);
  return (
    <div>
      <Head>
        <title>Movie id = {id} </title>
      </Head>
      <div>
        <h1>Actor id = {id}</h1>
      </div>
    </div>
  );
}
