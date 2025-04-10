import React from 'react'

async function UsersPage() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    console.log(users);

  return (
    <h1>User Page</h1>
  )
}

export default UsersPage



