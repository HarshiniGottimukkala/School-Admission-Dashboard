import React, { useState, useContext } from 'react'
import { Card, CardContent, Typography, Grid, Pagination } from '@mui/material';
import { UserContexts } from '../../../../../../../context/UserContext';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import CallIcon from '@mui/icons-material/Call';
import './Cards.scss';

const Cards = () => {

    const user = useContext(UserContexts);
    console.log(user)


    const pageSize = 6;

    const [page, setPage] = useState(1);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;


    return (
        <div className='cards'>
            <Grid container spacing={4}>
                {user.slice(startIndex, endIndex).map(item => (
                    <Grid item xs={4} key={item.id}>
                        <div className='card'>
                                <MoreHorizIcon sx={{fontSize : 30, color : '#A9A1B5', cursor : 'pointer'}}/>
                                <div className="details">
                                    <img src={item.img} className='profile'/>
                                    <h3>{item.name}</h3>
                                    <p className='tag'>Teacher</p>
                                    <p className='sub'>Mathematics</p>
                                    <p className='sub1'>Science</p>
                                    <div className="icons">
                                        <div className='icon'><CallIcon sx={{fontSize : 15, color : '#FF9F43', cursor : 'pointer'}}/></div>
                                        <div className='icon'><MailOutlineIcon sx={{fontSize : 15, color : '#FF9F43', cursor : 'pointer'}} /></div>
                                    </div>
                                </div>
                        </div>
                    </Grid>
                ))}
            </Grid>
            <Pagination
                count={Math.ceil(user.length / pageSize)}
                page={page}
                onChange={handleChangePage}
                variant="outlined"
                shape="rounded"
            />
        </div>
    )
}

export default Cards