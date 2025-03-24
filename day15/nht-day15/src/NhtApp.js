import React from 'react'
import { BrowserRouter as NhtRouter, Route, Routes } from 'react-router-dom'
import NhtNavBar from './components/NhtNavBar'
import NhtHome from './components/NhtHome'
import NhtEditUser from './components/NhtEditUser'
import NhtCreateUser from './components/NhtCreateUser'
import NhtListUser from './components/NhtListUser'
export default function NhtApp() {
  return (
    <div className='container border my-3 p-3'>
      <h1 className='alert alert-danger text-center'>K23CNT1 - nguyen huu tuyen - 2310900105</h1>
      <hr/>
      <NhtRouter>
          <NhtNavBar />
          <hr/>
          <Routes>
              <Route path='/' element={<NhtHome/>} />
              <Route path='/Nht-list-user' element={<NhtListUser/>} />
              <Route path='/Nht-create-user' element={<NhtCreateUser/>} />
              <Route path='/Nht-edit-user/:id' element={<NhtEditUser/>} />
          </Routes>
      </NhtRouter>
    </div>
  )
}