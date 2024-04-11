import React, { useContext } from 'react'
import EmailIcon from '@mui/icons-material/Email';
import AddIcon from '@mui/icons-material/Add';
import { UserContexts } from '../../../../../../../context/UserContext'
import './RecentStudents.scss';
import { Link } from 'react-router-dom';


const RecentStudents = () => {

    const userData = useContext(UserContexts);

    return (
        <div className="recentStudents">
            <div className="head">
                <div className="header-details">
                    <h1>Recent Students</h1>
                    <p>You have <span>456</span> students</p>
                </div>
                <div className="plus-icon">
                    <AddIcon fontSize="small" sx={{ color: "white" }} />
                </div>
            </div>

            {userData && userData.slice(0, 5).map((user, index) => {
                return (
                    <div className="recent-student-details" key={index}>
                        <div className="student-profile">
                            {/* <p className='sphere'></p> */}
                            <img className='sphere'src={user.img} alt="" />
                            <div className="name-details">
                                <p className='name' >{user.name}</p>
                                <p className='class'>Class VII A</p>
                            </div>
                        </div>
                        <div className="mail">
                            <EmailIcon fontSize="inherit" sx={{ color: '#A398AE'}} />
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

export default RecentStudents