import { useContext } from 'react'
import { UserContext } from '../../context/userContext'
import React from 'react'

const DashBoard = () => {
    const {user} = useContext(UserContext)
    console.log('user in dashborad', user)
  return (
    <div>
        <h1>DashBoard</h1>
        {!!user && (<h2>Hi {user.name}!</h2>)}
    </div>
  )
}

export default DashBoard