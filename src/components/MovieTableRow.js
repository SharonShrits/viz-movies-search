import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

const MovieTableRow = ({ movie }) => {
    return (
        <TableRow key={movie.imdbID}>
            <TableCell component="th" scope="row">{movie.Title}</TableCell>
            <TableCell align="right">{movie.Year}</TableCell>
        </TableRow>
    );
}

export default MovieTableRow;