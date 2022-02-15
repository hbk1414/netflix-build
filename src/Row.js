import axios from './axios'
import React, { useState, useEffect } from 'react';
import './Row.css'

function Row({ title, fetchURL, isLargeRow = false }) {

    const [movies, setMovies] = useState([])

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchURL)
            setMovies(request.data.results)
            return request
        }
        fetchData()
    }, [fetchURL])
    console.log(movies)

    return (
        <div className="row">
            <h2>{title}</h2>
        </div>
    )
}
export default Row

