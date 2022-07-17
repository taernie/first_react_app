import React, { useState, useEffect, useRef } from 'react'

import './App.css'

import searchIcon from './search.svg'
import MovieCards from './MovieCards';
import MovieCard from './MovieCard';

//588d7da2

const API_URL = 'http://www.omdbapi.com/?apikey=588d7da2';

const App = () => {
    
     const AppTitle = "Inside Edge"

    const searchMovies = async() => {

        const checkSearch = () => {

            return Search !== "" ? `&s=${Search}` : ""

        }

        const response = await fetch(API_URL + checkSearch());

        const data = await response.json();

        return data;
    }

    useEffect(() => {


        searchInput.current.focus();

    }, [])
    
    const [Search, setSearch] = useState('')

    const [SearchedMovies, setSearchedMovies] = useState([])

    const searchInput = useRef(null)

    const goSetSearch = (e) =>{

        setSearch(e.target.value)

    }

    const  SearchMovies = async() => {

        const result = await searchMovies();

         setSearchedMovies(SearchedMovies => SearchedMovies = result.Search);
        
    }

    return (

        <div className="app">

            <h1> { AppTitle } </h1>            

            <div className="search">
                <input 
                    ref={searchInput}
                    placeholder='Search a movies..'
                    value={Search}
                    onChange={ goSetSearch }
                />
                <img
                    src={searchIcon}
                    alt="search"
                    onClick={ SearchMovies }
                />
            </div>

            <div className="container">

               {

                    SearchedMovies?.length > 0
                    ? (
                        SearchedMovies.map(movie => (
                            <MovieCard movie={movie} key={movie.imdbID}/>
                        ))
                    )
                
                    :
                        <h2>No Movies found...</h2>

                    // SearchedMovies?.length > 0
                    // ? (
                    //     <MovieCards 
                    //     Movies={ SearchedMovies }
                    // />
                    // )
                    // :
                    //     <h2>No Movies found...</h2>
                }

            </div>

        </div>


    )

    
}

export default App