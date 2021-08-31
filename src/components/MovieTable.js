import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import MovieTableRow from './MovieTableRow';
import MovieTableHeadRow from './MovieTableHeadRow';
import { getComparator, stableSort } from '../utils/utils';

const useStyles = makeStyles({
    tableContainer: {
        width: '50%',
        padding: '20px',

        '& .MuiTableCell-head': {
            fontWeight: 'bold'
        }
    },
    table: {
        minWidth: 300,
    }
});

const MovieTable = ({ movies }) => {
    const classes = useStyles();
    const [order, setOrder] = useState('asc');
    const [orderBy, setOrderBy] = useState();

    const headCells = ['Title', 'Year'];
    const sortedMovies = stableSort(movies, getComparator(order, orderBy));

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    return (
        <TableContainer className={classes.tableContainer} component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        {headCells.map((headCell, index) => (
                            <MovieTableHeadRow
                                headCell={headCell}
                                order={order}
                                orderBy={orderBy}
                                handleRequestSort={handleRequestSort}
                                isFirst={index === 0}
                            />
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {sortedMovies.map(movie => <MovieTableRow movie={movie}/>)}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default MovieTable;
