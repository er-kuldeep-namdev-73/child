import React, { useRef } from 'react'
import Input from '../Input/Input'
import Header from '../../Header/Header'

const Enroll = () => {

  // let impref = useRef()
  // function handleSubmit(e){
  //     e.preventDefault()
  //     // let file = impref.current.files[0];
  //     // if((file.name).match("(.jpg|.png|.jpeg|.gif)")){

  //     // }
  //     // else{
  //     //     alert("FileName does not match")
  //     // }

  // }

  return (
    <div className='row'>
      <Header />
      <div className='col-sm-3'></div>
      <div className='col-sm-6'>
        <p className='text-center'><span className='fs-1 border-bottom border-danger border-2'>Enroll Here</span></p>
        <form className='form-control'>
          <label>Name : </label>
          <Input type="text" className="form-control" placeholder="Enter Your Name" name="name" pattern={"[a-zA-Z]+$"} />
          <label>Father's Name : </label>
          <Input type="text" className="form-control" placeholder="Enter Your Father Name" name="fatherName" pattern={"[a-zA-Z]+$"} />
          <label>Mother's Name : </label>
          <Input type="text" className="form-control" placeholder="Enter Your Mother Name" name="motherName" pattern={"[a-zA-Z]+$"} />
          <label>Phone : </label>
          <Input type="text" className="form-control" placeholder="Enter Your Phone no. (only 10 number)" name="phone" pattern={"([0-9]{10})"} />
          <label>Email : </label>
          <Input type="email" className="form-control" placeholder="Enter your Email" name="email" />
          <label>Image : </label>
          <Input type="file" className="form-control" name="image" accept="image/*" pattern={"(.jpg|.png|.jpeg|.gif)"} />
          <label>Date Of Birth : </label>
          <Input type="date" className="form-control" name="dob" pattern={"29/09/2002"} />
          <label>Age : </label>
          <Input type="text" className="form-control" name="age" placeholder="Enter Your Age (only 0-10 Year child Applicable)" pattern={"10|[0-9]"} />
          <label>State : </label>
          <Input type="text" className="form-control" name="state" placeholder="Enter Your State..." />
          <label>District : </label>
          <Input type="text" className="form-control" name="district" placeholder="Enter Your District" />
          <label>Address : </label>
          <textarea type="text" className="form-control" name="address" placeholder="Enter Your Address.."></textarea>
          <label>Pincode : </label>
          <Input type="text" className="form-control" name="pincode" placeholder="Enter Your Pincode (only 6 Number)..." pattern={"([0-9]{6})"} />
          <button className='btn btn-warning w-100 mt-2'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Enroll