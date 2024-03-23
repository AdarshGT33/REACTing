import React from 'react'
import {useContextProvider} from '../context/UserContext.jsx'

function Profile() {
  const {user} = useContextProvider()

  if(!user) return <div><h5>Please Provide Details</h5></div>
  return (
    <div>
      <h3>Namaste! {user.username} </h3>
    </div>
  )
}

export default Profile