//Components/navBar.jsx
"use client"
import React, { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
const Navbar = () => {
  const [genres, setGenres] = useState([])
  const [movies, setMovies] = useState([])
  const [moviesMenuOpen, setMoviesMenuOpen] = useState(false)
  const [genresMenuOpen, setGenresMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

  const obj = {
    genres: [
      {
        id: 28,
        name: "Action",
      },
      {
        id: 12,
        name: "Adventure",
      },
      {
        id: 16,
        name: "Animation",
      },
      {
        id: 35,
        name: "Comedy",
      },
      {
        id: 80,
        name: "Crime",
      },
      {
        id: 99,
        name: "Documentary",
      },
      {
        id: 18,
        name: "Drama",
      },
      {
        id: 10751,
        name: "Family",
      },
      {
        id: 14,
        name: "Fantasy",
      },
      {
        id: 36,
        name: "History",
      },
      {
        id: 27,
        name: "Horror",
      },
      {
        id: 10402,
        name: "Music",
      },
      {
        id: 9648,
        name: "Mystery",
      },
      {
        id: 10749,
        name: "Romance",
      },
      {
        id: 878,
        name: "Science Fiction",
      },
      {
        id: 10770,
        name: "TV Movie",
      },
      {
        id: 53,
        name: "Thriller",
      },
      {
        id: 10752,
        name: "War",
      },
      {
        id: 37,
        name: "Western",
      },
    ],
  }
  const Movies = ["Top Rate", "Popular", "Latest", "Now playing", "Upcoming"]

  // Fetch genres from API
  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const response = await fetch("API_URL")
        const data = await response.json()
        setGenres(data.genres)
      } catch (error) {
        console.error("Error fetching genres:", error)
      }
    }

    fetchGenres()
    setGenres(obj.genres)
    setMovies(Movies)
  }, [])

  const handleMoviesMenuSelect = (option) => {}
  const handleGenresMenuSelect = (option) => {}

  // Function to handle search
  const handleSearch = (e) => {
    setSearchQuery(e.target.value)
  }

  return (
    <nav className=" navbar flex items-center justify-between bg-gray-800 p-4">
      {}

      <div className="flex items-center space-x-4">
        <Image
          src="/imgs/team9.jpg"
          alt="logo"
          className="w-24"
          width={64}
          height={64}
        />
        <span className="logo text-green-200">Movies|TV</span>

        <Link href="/" className="text-white text-xl font-semibold">
          Logo
        </Link>

        <div className="relative">
          <button
            onClick={() => setGenresMenuOpen(!genresMenuOpen)}
            className="text-white hover:text-gray-300 focus:outline-none"
          >
            Genres
          </button>
          {genresMenuOpen && (
            <div className="flex flex-col justify-start absolute top-full bg-gray-800 rounded-lg py-2 mt-1 w-48">
              {genres.map((item, index) => {
                const path = "/?genres=" + item.id
                return (
                  <Link
                    className="text-left p-1"
                    href={path}
                    key={index}
                    onClick={() => handleGenresMenuSelect(item.id)}
                  >
                    {item.name}
                  </Link>
                )
              })}
            </div>
          )}
        </div>
        <div className="relative">
          <button
            onClick={() => setMoviesMenuOpen(!moviesMenuOpen)}
            className="text-white hover:text-gray-300 focus:outline-none"
          >
            Movies
          </button>
          {moviesMenuOpen && (
            <div className="flex flex-col  absolute top-full bg-gray-800 rounded-lg py-2 mt-1 w-48">
              {Movies.map((item, index) => {
                const path = "/Movies?id=" + index
                return (
                  <Link
                    className="text-left p-1"
                    href={path}
                    key={index}
                    onClick={() => handleMoviesMenuSelect(item)}
                  >
                    {item}
                  </Link>
                )
              })}
            </div>
          )}
        </div>
        <div className="relative">
          <button className="text-white hover:text-gray-300 focus:outline-none">
            <Link href="/Actors">Actors</Link>
          </button>
        </div>
      </div>
      <div>
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearch}
          className="bg-gray-700 text-white px-3 py-1 rounded-md focus:outline-none"
        />
      </div>
    </nav>
  )
}

export default Navbar
