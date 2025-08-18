import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Home() {
    const [users, setUsers] = useState([])

   async function main() {
           const { data } = await axios.get ("http://jsonplaceholder.typicode.com/users")
           setUsers(data)
        }

    useEffect(() => {
        
        main()
    }, [])
    return <h1>{users[0]?.name}</h1>
}

export default Home