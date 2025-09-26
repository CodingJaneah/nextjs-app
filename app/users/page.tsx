import React from 'react'

// to add data types for every object data
interface User {
  id: number;
  name: string;
  username: string;
}

const page = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users', {cache : "no-store"});
  const users: User[] = await res.json();

  return (
    <div>
      <h1>Users</h1>
      <p>{new Date().toLocaleTimeString()}</p>
      <ul>
        {users.map(user =>
        <li key={user.id}>
          <span>{user.name}</span>
          <span style={{ marginLeft: "20px", color: "gray" }}>{user.username}</span>     
        </li>)}
      </ul>
    </div>
  )
}

export default page