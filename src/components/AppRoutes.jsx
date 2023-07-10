import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './layout/Layout'
import Header from './layout/Header'
import Home from './routes/Home'
import Page404 from './routes/Page404'
import Watches from './routes/Watches'
const AppRoutes = () => {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route index element={<Home/>} />
                <Route path="/watches" element={<Watches/>}/>
                <Route path="*" element={<Page404/>} />
            </Route>
        </Routes>
    </Router>
    )
}

export default AppRoutes