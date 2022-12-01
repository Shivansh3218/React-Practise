import React from 'react';
import { useDispatch } from 'react-redux';

const Dashboard = () => {
const dispatch = useDispatch()

    const handleLogout =()=>{ 
        const action ={
            "type":"logout",
            "payload" : null
        }
        dispatch(action)
    }
    return (
        <>
            <h1 style={{"textAlign": "center"}} >Dashboard Page</h1>
            <button onClick={handleLogout}>Logout</button>
        </>
    )
}

export default Dashboard;