import axios from 'axios';
import React, { useEffect, useState } from 'react'

const UserHook = () => {
    const [data,setData] = useState(null)

    const getUserData = async () => {
        try {
            const url = "https://jsonplaceholder.typicode.com/users"
            let response = await axios.get(url);
            return response
            // let data = response.data;
            // console.log(data);
        }
        catch(err){
            console.log(err);
        }
    }
    useEffect(()=>{
        setData(data)
    })

    const login = () =>{
        console.log("first")
    }
const signUp = () =>{
    console.log("bsdbj")
}
    return {getUserData,login,signUp,data};
}

export default UserHook;