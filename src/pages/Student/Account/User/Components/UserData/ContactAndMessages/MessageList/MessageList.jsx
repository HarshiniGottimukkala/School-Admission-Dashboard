import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContexts } from '../../../../../../../../context/UserContext';

import './MessageList.scss';


const MessageList = () => {

    const userData = useContext(UserContexts);

    const [filter, setFilter] = useState('');
    const [filtered, setFiltered] = useState(userData);


    useEffect(()=>{
        setFiltered(userData)
    },[userData]);

    const handleSearch = (e) => {
        const searchTerm = e.target.value.toLowerCase();
        setFilter(searchTerm);

        const filteredData = userData.filter((item) => {
            return item.name.toLowerCase().includes(searchTerm);
        });
        setFiltered(filteredData);
    }

    return (
        <div className="messages-content">
            <div className="head-text">
                <h1>Messages</h1>
            </div>

            <div className="search-content">
                <input type="text" value={filter} onChange={handleSearch} placeholder='Search..' />
            </div>

            {filtered.slice(0, 4).map((user, index) => {
                return (
                    <div key={index} className='messages'>
                        <div className="profile-of-student">
                            <div className="data">
                                <img className='sphere' src={user.img}/>

                                <div className="name-details">
                                    <p className='name' >{user.name}</p>
                                    <p className='class'>Lorem ipsum dolor sit amet...</p>
                                </div>
                            </div>

                            <p className='time'>12:45 PM</p>

                        </div>

                        <div className="horizontal">
                            <hr />
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

export default MessageList