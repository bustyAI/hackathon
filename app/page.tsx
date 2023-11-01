"use client"
import { Area, Hero, Navbar, Login } from '@/components'
import Offenders from '@/components/Offenders'
import Image from 'next/image'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"


export default function Home() {
  return (
    <main className="overflow-hidden">
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Hero/>}/>
          <Route path='/Area' element={<Area/>}/>
          <Route path='/Login' element={<Login/>}/>
          <Route path='/Offenders' element={<Offenders/>}/>
        </Routes>
      </Router>
    </main>
  )
}
