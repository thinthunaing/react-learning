import './App.css'
import logo from './assets/logog.png';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Vans from "./pages/Vans/Vans"
import Van from "./pages/Vans/Van"
import NotFound from "./pages/notFound"
import Login from "./pages/Login"

import Dashboard from "./pages/Host/Dashboard"
import Income from "./pages/Host/Income"
import Reviews from "./pages/Host/Reviews"
import HostVans from "./pages/Host/HostVans"
import HostVansDetails from "./pages/Host/HostVansDetails"
import HostVansInfo from "./pages/Host/HostVansInfo"
import HostVansPhoto from "./pages/Host/HostVansPhoto"
import HostVansPricing from "./pages/Host/HostVansPricing"

import Layout from "./components/Layout"
import HostLayout from "./components/HostLayout"
import AuthRequired from "./components/AuthRequired"

import "./server"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<AuthRequired />}>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans />} />
          <Route path="vans/:id" element={<Van />} />
        
          <Route path="host" element={<HostLayout />}>
            <Route index element={<Dashboard/>} />
            <Route path="income" element={<Income />} />
            <Route path="vans" element={<HostVans />} />
            <Route path="vans/:id" element={<HostVansDetails />}>
              <Route index element={<HostVansInfo />} />
              <Route path="pricing" element={<HostVansPricing />} />
              <Route path="photos" element={<HostVansPhoto />} />
            </Route>
            
            <Route path="reviews" element={<Reviews />} />

          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}