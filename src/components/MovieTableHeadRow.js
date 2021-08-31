import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import { TableSortLabel } from '@material-ui/core';

const MovieTableHeadRow = ({ headCell, orderBy, order, handleRequestSort, isFirst }) => (
    <TableCell
        key={headCell}
        sortDirection={orderBy === headCell ? order : false}
        align={isFirst ? 'left' : 'right'}
    >
        <TableSortLabel
            active={orderBy === headCell}
            direction={orderBy === headCell ? order : 'asc'}
            onClick={(event) => handleRequestSort(event, headCell)}
        >
            {headCell}
        </TableSortLabel>
    </TableCell>
);

export default MovieTableHeadRow;