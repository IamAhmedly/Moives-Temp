// src\pages\_app.js

import "../styles/globals.css"
import Navbar from "../app/components/navBar"
import Footer from "../app/components/footer"
function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-black h-[100vh] flex flex-col justify-between">
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}

export default MyApp
