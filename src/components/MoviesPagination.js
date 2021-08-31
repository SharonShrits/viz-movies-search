import React from 'react';
import Pagination from '@material-ui/lab/Pagination';

const MoviesPagination = ({ currPage, totalPages, pageChange }) => {
    return (
        <div style={{padding: '20px'}}>
            <Pagination
                count={totalPages}
                onChange={pageChange}
                color="primary"
                page={currPage}
            />
            <div>{totalPages} total pages</div>
        </div>
    );
}

export default MoviesPagination;
