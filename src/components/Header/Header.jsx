import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <div className='row bg-primary p-2 text-light fs-4'>
        <div className='col-sm-5'>
          <Link className='ms-1 text-decoration-none text-light' to="/home">Home</Link>
          <Link className='ms-5 text-decoration-none text-light' to="/about">AboutUs</Link>
          <Link className='ms-5 text-decoration-none text-light' to="/contact">ContactUs</Link>
        </div>
        <div className='col-sm-2'></div>
        <div className='col-sm-5'>
          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-warning" type="submit">Search</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Header