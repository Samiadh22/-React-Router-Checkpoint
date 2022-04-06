import React from 'react'
import {Movies} from './Data'
import MovieCard from './MovieCard'
function Movie() {
    return (
        <div className='movie'>
            {Movies.map((ele, key) => <MovieCard key={key} listMovie={ele}/>)}
        </div>
    )
}

export default Movie
