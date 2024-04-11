import React, { useContext, useEffect, useState } from 'react'
import EmailIcon from '@mui/icons-material/Email';
import AddIcon from '@mui/icons-material/Add';
import { UserContexts } from '../../../../../../../../context/UserContext'
import { Link } from 'react-router-dom';

import './Contact.scss';

const Contact = () => {

    const userData = useContext(UserContexts);
    console.log(userData)

    const [filter, setFilter] = useState('');
    const [filtered, setFiltered] = useState(userData);


    const handleSearch = (e) => {
        const searchTerm = e.target.value.toLowerCase();
        setFilter(searchTerm);

        const filteredData = userData.filter((item) => {
            return item.name.toLowerCase().includes(searchTerm);
        });
        setFiltered(filteredData);
    }

    useEffect(() => {
        setFiltered(userData)
    },[userData]);


    return (
        <div className="student-list-items ">
            <div className="head">
                <div className="header-details">
                    <h1>Recent Students</h1>
                    <p>You have <span>456</span> students</p>
                </div>
                <div className="plus-icon">
                    <AddIcon fontSize="small" sx={{ color: "white" }} />
                </div>
            </div>

            <div className="search-content">
                <input type="text" value={filter} onChange={handleSearch} placeholder='Search..' />
            </div>


            {filtered.slice(0, 5).map((user, index) => {
                return (
                    <div className="recent-student-details" key={index}>
                        <div className="student-profile">
                            <img src={user.img} className='sphere'/>
                            <div className="name-details">
                                <p className='name' >{user.name}</p>
                                <p className='class'>Class VII A</p>
                            </div>
                        </div>
                        <div className="mail">
                            <EmailIcon fontSize="inherit" sx={{ color: "gray" }} />
                        </div>
                    </div>
                )
            })
            }

            <div className="viewmore">
                <Link to="/user"><h3>ViewMore</h3></Link>
            </div>
        </div>
    )
}

export default Contact