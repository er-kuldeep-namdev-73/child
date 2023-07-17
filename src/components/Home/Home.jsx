import React from 'react'
import Header from '../Header/Header';
import Slider from '../Slider/Slider';
import Enroll from '../Form/Enroll/Enroll';
import { Link } from 'react-router-dom';
import Table from '../Table/Table';

const Home = () => {
  return (
    <div>
      <Header />
      <Slider />
      <div className='row'>
        <div className='col-sm-4'></div>
        <div className='col-sm-4'>
          <center><Link className='btn btn-primary my-3 p-3 text-center' to="/enroll">Enrollment Here</Link></center>
        </div>
        <div className='col-sm-4'></div>
      </div>

      <Table/>
    </div>
  )
}

export default Home