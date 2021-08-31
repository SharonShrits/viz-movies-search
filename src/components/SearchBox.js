import React, { useRef }from 'react';
import { Button } from '@material-ui/core';
import './SearchBox.css';

const SearchBox = ({ searchChange }) => {
    const searchRef = useRef();

    return (
        <div className='search-box-container'>
            <div>Search for any movie you like:</div>
            <div className='search-box'>
                <input
                    className='search-input'
                    type='search'
                    placeholder='Type movie name...'
                    ref={searchRef}
                />
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => searchChange(searchRef.current.value)}
                >
                    Search
                </Button>
            </div>
        </div>
    );
}

export default SearchBox;
