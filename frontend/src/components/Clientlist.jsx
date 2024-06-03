import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Button } from '@mui/material';

const Investments = props => {
    const [clients, setClients] = useState([]);
    const [error, setError] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [recordsPerPage] = useState(5);

    useEffect(() => {
        const fetchClients = async () => {
            try {
                const response = await axios.get('/api/clients');
                const clientsData = response.data.record;
                if (clientsData.length === 0) {
                    setError('No clients found.');
                } else {
                    setClients(clientsData);
                }
            } catch (error) {
                console.error('Error', error);
                setError(error.response?.data?.message || error.message);
            }
        };
        fetchClients();
    }, []);

    // Logic to get current records
    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
    const currentRecords = clients.slice(indexOfFirstRecord, indexOfLastRecord);

    // Change page
    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    // Generate page numbers
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(clients.length / recordsPerPage); i++) {
        pageNumbers.push(i);
    }

    if (error) {
        return <Typography variant="h6" align="center">{error}</Typography>;
    }

    return (
        <div>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 350 }} aria-label="caption table">
                    <TableHead>
                        <TableRow sx={{ backgroundColor: '#ff3d00' }}>
                            <TableCell>Id</TableCell>
                            <TableCell>Full Name</TableCell>
                            <TableCell>Address</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {currentRecords.map(record => (
                            <TableRow key={record.id}>
                                <TableCell component="th" scope="row">{record._id}</TableCell>
                                <TableCell>{record.fullName}</TableCell>
                                <TableCell>{record.address}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            {/* Pagination Controls */}
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                <Button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>Previous</Button>
                {pageNumbers.map(number => (
                    <Button key={number} onClick={() => handlePageChange(number)} style={{ margin: '0 5px' }}>{number}</Button>
                ))}
                <Button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === pageNumbers.length}>Next</Button>
            </div>
        </div>
    );
};

export default Investments;
