import React from 'react';

import beef from '../assets/Beef Steak with Fried Potato.jpeg';
import pancake from '../assets/images.jpeg';
import japanese from '../assets/Japanese Beef Ramen.jpeg';
import './FoodMenu.scss';
import { Link } from 'react-router-dom';
const FoodMenu = () => {

    const food = [
        {
            image: beef,
            name: 'Beef Steak with Fried Potato'
        },
        {
            image: pancake,
            name: 'Pancake with Honey'
        },
        {
            image: japanese,
            name: 'Japanese Beef Ramen'
        }
    ];

    return (

        <div className='food-menu'>
            <div className='menu-head'>
                <h1>Current Foods Menu</h1>
            </div>
            {food.map((item, index) => {
                return (
                    <div key={index} className="items">
                        <div className="image">
                            <img src={item.image} alt="" />
                        </div>
                        <div className="item-name">
                            <h2>{item.name}</h2>
                            <p>Lorem ipsum dolor sit amet...</p>
                        </div>
                    </div>
                )
            })}

            <div className="viewmore">
                <Link to="/dashboard"><h3>ViewMore</h3></Link>
            </div>

        </div>

    )
}

export default FoodMenu