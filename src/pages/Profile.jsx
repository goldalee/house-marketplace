import React from 'react'
import {getAuth} from 'firebase/auth'
import {useState, useEffect} from 'react'

function Profile () {
    const [user, setUser] =useState(null)

    const auth = getAuth()
    useEffect(() =>{
        setUser(auth.currentUser)
    }, [])
  return user ? <h3>{user.displayName}</h3> : 'Not Logged in'
    
  
}

export default Profile