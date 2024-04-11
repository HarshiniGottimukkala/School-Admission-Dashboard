import React, { useContext } from 'react';
import { UserContexts } from '../../../../../../../context/UserContext'
import './Messages.scss';
import { Link } from 'react-router-dom';

const Messages = () => {

    const userData = useContext(UserContexts);

    return (
        <div className="messages-section">
            <div className="head">
                <h1>Messages</h1>
            </div>

            {userData && userData.slice(0, 4).map((user, index) => {
                return (
                    <div key={index} className='messages'>
                            <div className="profile-of-student">

                                {/* <p className='sphere'></p> */}
                                <img className='sphere' src={user.img} alt="" />

                                <div className="name-details">
                                    <p className='name' >{user.name}</p>
                                    <p className='class'>Lorem ipsum dolor sit amet...</p>
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
                <Link to="/dashboard"><h3>ViewMore</h3></Link>
            </div>
        </div>
    )
}

export default Messages