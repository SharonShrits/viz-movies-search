import React, { useState, useEffect } from 'react';
import SearchBox from '../components/SearchBox';
import MovieTable from '../components/MovieTable';
import MoviesPagination from '../components/MoviesPagination';
import './App.css';

const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchField, setSearchField] = useState('');
    const [currPage, setCurrPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(async () => {
        const res = await fetch(`https://jsonmock.hackerrank.com/api/movies/search/?Title=${searchField}&page=${currPage}`);
        const {data, total_pages} = await res.json();

        setMovies(data);
        setTotalPages(total_pages);
    },[searchField, currPage]);

    const onSearchChange = (value) => {
        setSearchField(value);
        setCurrPage(1);
    }

    const onPageChange = (event, currPage) => {
        setCurrPage(currPage);
    }

    return (
        <div className='app-container'>
            <div className="header">Movies Search</div>
            <SearchBox searchChange={onSearchChange}/>
            <MovieTable movies={movies}/>
            <MoviesPagination currPage={currPage} totalPages={totalPages} pageChange={onPageChange}/>
        </div>
    );
}

export default App;
