import { useContext } from 'react'
import { UserContext } from '../context/UserContext'
import React from 'react'

const DashBoard = () => {
    const {user} = useContext(UserContext)
  return (
    <div>
        <h1>DashBoard</h1>
        {!!user && (<h2>Hi {user.name}!</h2>)}
    </div>
  )
}

export default DashBoard