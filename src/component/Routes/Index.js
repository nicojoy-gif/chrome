import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../landing/Home'
import Login from '../Signup/Login'
import Videorepo from '../Videorepo/Videorepo'
import Record from '../record/Record'
import Download from '../Videorepo/Download'

function Index() {
  return (
    <>
<Routes>
    <Route path='/' element={<Home />}/>
    <Route path='/login' element={<Login />}/>
    <Route path='/video' element={<Videorepo />} />
    <Route path='/rec' element={<Record />} />
    <Route path='/download' element={<Download />} />
</Routes>
    </>
  )
}

export default Index