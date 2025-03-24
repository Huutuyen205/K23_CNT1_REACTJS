import React from 'react'
import {Link} from 'react-router-dom'
import NhtHome from './NhtHome'

export default function NhtNavBar() {
  return (
    <nav>
        <Link to='/' >Home</Link> |
        <Link to='/nht-list-user' >List User</Link> |
        <Link to='/nht-create-user' >Create User</Link>
        <NhtHome/>
    </nav>
  )
}