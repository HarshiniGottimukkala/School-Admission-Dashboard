import React from 'react'
import './Plan.scss';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Button } from '@mui/material';

const Plan = () => {
    return (
        <div className='plan'>
            <div className="plan-details">
                <div className="box1">
                    <div className="free-plan">
                        <p>Your PLan</p>
                        <h1>Free</h1>
                    </div>
                    <div className="plan-list">
                        <ul>
                            <li>50 GB Storage</li>
                            <li>Limited Features</li>
                        </ul>
                    </div>
                    <div className="text">
                        <p>Upgrade to Premium Plan to get more Features & Storage memory </p>
                    </div>
                    <div className="upgrade-plan-button">
                        <Button sx={{fontSize: 10, textTransform : 'none', color:'#303972', fontFamily : 'Poppins', fontWeight :'600'}}>Upgrade Plan</Button>
                    </div>
                </div>
                <MoreHorizIcon sx={{cursor :'pointer'}}/>
            </div>
        </div>
    )
}

export default Plan