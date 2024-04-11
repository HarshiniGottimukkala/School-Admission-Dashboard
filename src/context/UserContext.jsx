import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';
import Leanne from '../assets/Leanne.jpeg'
import Ervin from '../assets/Ervin.jpeg'
import Clementine from '../assets/Clamentine.jpeg'
import Patricia from '../assets/Patricia.jpeg'
import Chelsey from '../assets/Chelsey.jpeg'
import Dennis from '../assets/Dennis.jpeg'
import Kurtis from '../assets/Kurtis.jpeg'
import Nicholas from '../assets/Nicholas.jpg'
import Glenna from '../assets/Glenna.jpeg'
import Clementina from '../assets/Clementina.jpeg'


export const UserContexts = createContext();

const UserContext = ({children}) => {

  const [data, setData] = useState([]);

  const images = [
    {
      img : Leanne
    },
    {
      img : Ervin
    },
    {
      img : Clementine
    },
    {
      img : Patricia
    },
    {
      img : Chelsey
    },
    {
      img : Dennis
    },
    {
      img : Kurtis
    },
    {
      img : Nicholas
    },
    {
      img : Glenna
    },
    {
      img : Clementina
    }
  ]

  const getUserData = async() => {
    try{
      const response = await axios.get("https://jsonplaceholder.typicode.com/users");
      const jsonData = response.data;
      const newData =jsonData.map((picture, index) => ({
        ...picture,
        img: images[index].img
    }));
      setData(newData);
      console.log(newData);
    }
    catch(err){
      console.log(err)
    }
  }

  useEffect(()=>{
    getUserData()
  }, []);

  return (
    <UserContexts.Provider value={data}>
      {children}
    </UserContexts.Provider>
  )
}

export default UserContext