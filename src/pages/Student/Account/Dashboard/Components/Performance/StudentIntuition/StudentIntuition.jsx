import React, { useContext, useState } from 'react';
import { UserContexts } from '../../../../../../../context/UserContext';


// import slider from '../../assets/slider.png';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import PrintIcon from '@mui/icons-material/Print';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import './StudentIntuition.scss';
import { Table, TableBody, TableCell, TableContainer, TablePagination, TableRow } from '@mui/material';

const StudentIntuition = () => {

  const user = useContext(UserContexts);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  }

  const handleRowPerPage = (e) => {
    setRowsPerPage(e.target.value);
    setPage(newPage);

  }

  return (
    <div className='student-info'>
      <div className="heading-text">
        <h1>Unpaid Student Intuition</h1>
      </div>

      <TableContainer /* sx={{maxHeight : 300}} */>
        <Table className="student-data-">
          <TableBody>
            {user && user.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((item, index) => {
              return (
                <TableRow className='table-row' key={index}>
                  <TableCell>
                    <div className="student-name">
                      {/* <p className='round'></p> */}
                      <img className='round' src={item.img} alt="" />
                      <p className='name'>{item.name}</p>
                    </div>
                  </TableCell>

                  <TableCell><p className='id'>ID 123456789</p></TableCell>

                  <TableCell>
                    <div className="class">
                      <div className="profile-icon">
                        <PermIdentityIcon sx={{fontSize : '20px'}}/>
                      </div>
                      <div className="section">
                        <p>Class</p>
                        <h3>VII A</h3>
                      </div>
                    </div>
                  </TableCell>

                  <TableCell className='amount'><p>$ 50,036</p></TableCell>

                  <TableCell>
                    <div className="options">
                      <PrintIcon fontSize="small"  sx={{cursor :'pointer', color : '#A098AE'}}/>
                      <MoreHorizIcon fontSize="small"  sx={{cursor :'pointer' , color : '#A098AE'}}/>
                    </div>
                  </TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <div className="end">
        <p>Showing <span>{page * rowsPerPage}-{page * rowsPerPage + rowsPerPage}</span> from <span>{user.length}</span> data</p>
        <TablePagination
          //  rowsPerPageOptions={[5,10]}
          rowsPerPage={rowsPerPage}
          page={page}
          count={user.length}
          component="div"
          onPageChange={handlePageChange}
          onRowsPerPageChange={handleRowPerPage}
          labelDisplayedRows={() => null}
          labelRowsPerPage=""
          rowsPerPageOptions={[]}
        >
        </TablePagination>
      </div>
    </div >
  );
}

export default StudentIntuition;
