import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

const MovieTableRow = ({ movie: { imdbID, Title, Year } }) => (
    <TableRow key={imdbID}>
        <TableCell component="th" scope="row">{Title}</TableCell>
        <TableCell align="right">{Year}</TableCell>
    </TableRow>
);

export default MovieTableRow;