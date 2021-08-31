import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import { TableSortLabel } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    visuallyHidden: {
        border: 0,
        clip: 'rect(0 0 0 0)',
        height: 1,
        margin: -1,
        overflow: 'hidden',
        padding: 0,
        position: 'absolute',
        top: 20,
        width: 1,
    },
});

const MovieTableHeadRow = ({ headCell, orderBy, order, handleRequestSort, isFirst }) => {
    const classes = useStyles();

    return (
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
                {orderBy === headCell ? (
                    <span className={classes.visuallyHidden}>
                        {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                    </span>
                ) : null}
            </TableSortLabel>
        </TableCell>
    );
}

export default MovieTableHeadRow;