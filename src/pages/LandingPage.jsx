import React from 'react'
import { Link } from 'react-router-dom'
import Header from "../Components/Header"
export default function LandingPage() {
  return (
    
   <>
   <Header/>
      <div style={{width:'100%',height:'90vh',backgroundColor:'grey'}} className='rounded '>
        <div style={{height:'100%'}} className="container" >
        <div style={{height:'100%'}} className='row  align-items-center'>
            <div className="col-lg-5">
              <h1 style={{fontSize:'80px'}} className='fw-bolder text-light'>REGISTER NOW</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore animi dignissimos temporibus, itaque dolorem saepe, repudiandae aliquam placeat provident, voluptatibus eligendi! Magnam quis quod, molestiae itaque quaerat modi inventore eaque!</p>
              <Link className='btn btn-warning' to={'/register'}>Get Started</Link>
            </div>
            <div className="col-lg-2"/>
            <div className="col-lg-4">
              <img className='w-100'  src="https://img.freepik.com/free-vector/sign-page-abstract-concept-illustration_335657-3875.jpg?w=740&t=st=1707823441~exp=1707824041~hmac=e6355f237eb54070c5813be757a8415825d4c7122c04845731dbfeecdb77eb82" alt="No-image" />
            </div>
            <div className="col-lg-1"/>
        </div>
        </div>
      </div>
   </>
  )
}
