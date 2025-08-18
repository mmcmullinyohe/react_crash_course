import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Home() {
    const [users, setUsers] = useState([])

   async function fetchUsers() {
           const { data } = await axios.get ("http://jsonplaceholder.typicode.com/users");
           setUsers(data)
        }

    useEffect(() => {
        setTimeout(() => {
            fetchUsers();
        }, 500);
    }, [])

    const pixels = "3px";

    return (
        <div>
            {users.map(() => {
                return (
        <div style={{border: `${pixels} solid black` }}>
            <div>{users[0]?.id}</div>
            <div>{users[0]?.name}</div>
            <div>{users[0]?.email}</div>
            <div>{users[0]?.username}</div>
        </div>
    );
})}
</div>
    );
}

export default Home