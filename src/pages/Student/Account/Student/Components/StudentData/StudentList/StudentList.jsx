import React, { useContext, useEffect, useState } from 'react';
import { UserContexts } from '../../../../../../../context/UserContext';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AddIcon from '@mui/icons-material/Add';
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import Popup from 'reactjs-popup';

import CallIcon from '@mui/icons-material/Call';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

import './StudentList.scss';

const StudentList = () => {
    const user = useContext(UserContexts);

    const [usersList, setUsersList] = useState(user);

    useEffect(() => {
        setUsersList(user)
    }, [user]);

    const [selectedRows, setSelectedRows] = useState([]);
    const [newStudent, setNewStudent] = useState({
        name: '',
        username: '',
        address: {
            city: ''
        }
    });

    useEffect(() => {
        console.log(newStudent)
    }, [newStudent])
    const [selectAll, setSelectAll] = useState(false);
    const [showPopup, setShowPopup] = useState(false);

    const handleRowSelection = (event, id) => {
        const selectedIndex = selectedRows.indexOf(id);
        let newSelected = [];

        if (selectedIndex === -1) {
            newSelected = [...selectedRows, id];
        } else {
            newSelected = selectedRows.filter((rowId) => rowId !== id);
        }

        setSelectedRows(newSelected);
    };

    const handleSelectAll = (event) => {
        setSelectAll(event.target.checked);
        if (event.target.checked) {
            setSelectedRows(usersList.map((_, index) => index));
        } else {
            setSelectedRows([]);
        }
    };

    const isSelected = (id) => selectedRows.indexOf(id) !== -1;

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const handlePageChange = (event, newPage) => {
        setPage(newPage);
    }

    const handleRowPerPage = (e) => {
        setRowsPerPage(e.target.value);
        setPage(0);
    };

    const addStudent = (e) => {
        setShowPopup(true);
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewStudent({ ...newStudent, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(newStudent)
        setUsersList([...usersList, newStudent]);
        setNewStudent({
            name: '',
            parentName: '',
            address: {
                city: ''
            }
        });
    }

    console.log(usersList);

    useEffect(() => {
        //    console.log(usersList)
    }, [usersList]);


    return (
        <form className='students-form'>
            <div className="add">
                <Button className="newest" >
                    <p>Newest</p>
                    <ArrowDropDownIcon sx={{ color: '#303972', fontSize: "large" }} />
                </Button>
                <Button className="new-student" onClick={addStudent}>
                    <AddIcon sx={{ color: 'white', fontSize: 'large' }} />
                    <p>New Student</p>
                </Button>
            </div>

            <TableContainer className='data-table-content'>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ color: '#303972', fontFamily: 'Poppins', fontSize: 12, fontWeight: 600 }}>
                                <Checkbox sx={{ color: '#A098AE', fontFamily: 'Poppins', fontSize: 12, fontWeight: 600 }} checked={selectAll} onChange={handleSelectAll} />
                            </TableCell>
                            <TableCell sx={{ color: '#303972', fontFamily: 'Poppins', fontSize: 12, fontWeight: 600 }}>Name</TableCell>
                            <TableCell sx={{ color: '#303972', fontFamily: 'Poppins', fontSize: 12, fontWeight: 600 }}>ID</TableCell>
                            <TableCell sx={{ color: '#303972', fontFamily: 'Poppins', fontSize: 12, fontWeight: 600 }}>Date</TableCell>
                            <TableCell sx={{ color: '#303972', fontFamily: 'Poppins', fontSize: 12, fontWeight: 600 }}>Parent Name</TableCell>
                            <TableCell sx={{ color: '#303972', fontFamily: 'Poppins', fontSize: 12, fontWeight: 600 }}>City</TableCell>
                            <TableCell sx={{ color: '#303972', fontFamily: 'Poppins', fontSize: 12, fontWeight: 600 }}>Contact</TableCell>
                            <TableCell sx={{ color: '#303972', fontFamily: 'Poppins', fontSize: 12, fontWeight: 600 }}>Grade</TableCell>
                            <TableCell sx={{ color: '#303972', fontFamily: 'Poppins', fontSize: 12, fontWeight: 600 }}>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {usersList && usersList.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((item, index) => (
                            <TableRow key={index} hover>
                                <TableCell sx={{ color: '#A098AE', fontFamily: 'Poppins', fontSize: 12, fontWeight: 400 }}>
                                    <Checkbox sx={{ color: '#A098AE', fontFamily: 'Poppins', fontSize: 12, fontWeight: 400 }} checked={isSelected(index)} onChange={(event) => handleRowSelection(event, index)} />
                                </TableCell>
                                <TableCell sx={{ color: '#7D8FB3', fontFamily: 'Poppins', fontSize: 10, fontWeight: 600 }}>
                                    <div className="name">
                                        {/* <p></p> */}
                                        <img className='image' src={item.img} alt="" />
                                        {item.name}
                                    </div>
                                </TableCell>
                                <TableCell sx={{ color: '#FF9F43', fontFamily: 'Poppins', fontSize: 12, fontWeight: 600 }}>#123456789</TableCell>
                                <TableCell sx={{ color: '#A9A1B5', fontFamily: 'Poppins', fontSize: 12, fontWeight: 400 }}>March 25, 2021</TableCell>
                                <TableCell sx={{ color: '#303972', fontFamily: 'Poppins', fontSize: 12, fontWeight: 400 }}>{item.username}</TableCell>
                                <TableCell sx={{ color: '#303972', fontFamily: 'Poppins', fontSize: 12, fontWeight: 400 }}>{item.address.city}</TableCell>
                                <TableCell sx={{ fontFamily: 'Poppins', fontSize: 12, fontWeight: 600 }}>
                                    <div className="contact-icons">
                                        <div className="icon">
                                            <CallIcon sx={{ color: '#E76A00', fontFamily: 'Poppins', fontSize: 12, fontWeight: 400 }} />
                                        </div>
                                        <div className="icon">
                                            <MailOutlineIcon sx={{ color: '#E76A00', fontFamily: 'Poppins', fontSize: 12, fontWeight: 400 }} />
                                        </div>
                                    </div>
                                </TableCell>
                                <TableCell sx={{ color: '#FFFFFF', fontFamily: 'Poppins', fontSize: 12, fontWeight: 400 }}>
                                    <div className="grade">
                                        <p>VII A</p>
                                    </div>
                                </TableCell>
                                <TableCell sx={{ color: '#7D8FB3', fontFamily: 'Poppins', fontSize: 12, fontWeight: 600 }}>
                                    <MoreHorizIcon sx={{ cursor: 'pointer' }} />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <div className="footer">
                    <p>Showing <span>{page * rowsPerPage}-{page * rowsPerPage + rowsPerPage}</span> from <span>{usersList.length}</span> data</p>
                    <TablePagination
                        rowsPerPage={rowsPerPage}
                        page={page}
                        count={usersList.length}
                        component="div"
                        onPageChange={handlePageChange}
                        onRowsPerPageChange={handleRowPerPage}
                        labelDisplayedRows={() => null}
                        labelRowsPerPage=""
                        rowsPerPageOptions={[]}
                    >
                    </TablePagination>
                </div>
            </TableContainer>

            <Popup open={showPopup} onClose={() => setShowPopup(false)}>
                <div className="form-data">
                    <form onSubmit={handleSubmit} className='add-new-student'>
                        <input type='text' name="name" value={newStudent.name} onChange={handleInputChange} placeholder='Enter your name' className='inputs' />
                        <input type='text' name="username" value={newStudent.username} onChange={handleInputChange} placeholder='Parent Name' className='inputs' />
                        <input type='text' name="city" value={newStudent.address.city} onChange={(e) => setNewStudent({ ...newStudent, address: { ...newStudent.address,/* [e.target.name] */ city: e.target.value } })} placeholder='Enter city' className='inputs' />
                        {/* <input type='text' name="city" value={newStudent.address.phno}  onChange={(e)=>setNewStudent({...newStudent,address:{...newStudent.address,phno:e.target.value}})} placeholder='Enter city' /> */}
                        <input className="input-submit" type='submit' value="Submit" />
                    </form>
                </div>
            </Popup>

        </form >
    );
}

export default StudentList;