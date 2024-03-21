// src\pages\index.js
import Head from "next/head" 
const apiKey = process.env.apiKey
export default function Index() {
  return (
    <div className="s">
      <Head>
        <title>Home Page </title>
      </Head>
      <div>
        <h1>Welcome to the Home Page</h1>
       
      </div>
    </div>
  )
}
