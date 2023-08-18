import React from 'react'
import "./../CSS/userinfor.css"
import { useEffect } from 'react';
export default function UserInfo() {

 
      return (<>
      {/* https://bootdey.com/snippets/view/account-setting-or-edit-profile#css */}
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous"></link>
      <div className="container">
  <div className="row gutters">
    <div className="col-xl-3 col-lg-3 col-md-11 col-sm-12 col-12">
      <div className="card h-100">
        <div className="card-body">
          <div className="account-settings">
            <div className="user-profile">
              <div className="user-avatar text-center">
                <img
                  src="https://bootdey.com/img/Content/avatar/avatar7.png"
                  alt="Maxwell Admin"
                  style={{width:"80px",height:"80px",margin:"auto"}}
                />
              </div>
              <h5 className="user-name">Yuki Hayashi</h5>
              <h6 className="user-email">yuki@Maxwell.com</h6>
            </div>
            <div className="about">
              <h5>About</h5>
              <p>
                I'm Yuki. Full Stack Designer I enjoy creating user-centric,
                delightful and human experiences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
      <div className="card h-100">
        <div className="card-body">
          <div className="row gutters">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 d-flex">
              <h6 className="mb-2 text-primary d-flex">Personal Details</h6>
            </div>
            <div className="col-xl-5 col-lg-5 col-md-6 col-sm-6 col-12 d-flex">
              <div className="form-group">
                <label htmlFor="fullName" className='d-flex'>Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="fullName"
                  placeholder="Enter full name"
                />
              </div>
            </div>
            <div className="col-xl-5 col-lg-5 col-md-6 col-sm-6 col-12 d-flex">
              <div className="form-group">
                <label htmlFor="eMail" className='d-flex'>Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="eMail"
                  placeholder="Enter email ID"
                />
              </div>
            </div>
            <div className="col-xl-5 col-lg-5 col-md-6 col-sm-6 col-12 d-flex">
              <div className="form-group">
                <label htmlFor="phone" className='d-flex'>Phone</label>
                <input
                  type="text"
                  className="form-control"
                  id="phone"
                  placeholder="Enter phone number"
                />
              </div>
            </div>
            <div className="col-xl-5 col-lg-5 col-md-6 col-sm-6 col-12 d-flex">
              <div className="form-group">
                <label htmlFor="website" className='d-flex'>Website URL</label>
                <input
                  type="url"
                  className="form-control"
                  id="website"
                  placeholder="Website url"
                />
              </div>
            </div>
          </div>
          <div className="row gutters">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 d-flex">
              <h6 className="mt-3 mb-2 text-primary">Address</h6>
            </div>
            <div className="col-xl-5 col-lg-6 col-md-6 col-sm-6 col-12 d-flex">
              <div className="form-group">
                <label htmlFor="Street" className='d-flex'>Street</label>
                <input
                  type="name"
                  className="form-control"
                  id="Street"
                  placeholder="Enter Street"
                />
              </div>
            </div>
            <div className="col-xl-5 col-lg-6 col-md-6 col-sm-6 col-12 d-flex">
              <div className="form-group">
                <label htmlFor="ciTy" className='d-flex'>City</label>
                <input
                  type="name"
                  className="form-control"
                  id="ciTy"
                  placeholder="Enter City"
                />
              </div>
            </div>
            <div className="col-xl-5 col-lg-5 col-md-6 col-sm-6 col-12 d-flex">
              <div className="form-group">
                <label htmlFor="sTate" className='d-flex'>State</label>
                <input
                  type="text"
                  className="form-control"
                  id="sTate"
                  placeholder="Enter State"
                />
              </div>
            </div>
            <div className="col-xl-5 col-lg-5 col-md-6 col-sm-6 col-12 d-flex">
              <div className="form-group">
                <label htmlFor="zIp" className='d-flex'>Zip Code</label>
                <input
                  type="text"
                  className="form-control"
                  id="zIp"
                  placeholder="Zip Code"
                />
              </div>
            </div>
          </div>
          <div className="row gutters" >
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12" >
              <div className="text-left" >
                <button
                  type="button"
                  id="submit"
                  name="submit"
                  className="btn btn-secondary "
                  style={{marginRight:"10px"}}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  id="submit"
                  name="submit"
                  className="btn btn-primary "
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
      </>


  
  )
}
