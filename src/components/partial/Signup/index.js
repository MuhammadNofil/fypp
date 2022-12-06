import React from 'react'

const SignupForm = () => {
  return (
    <>
    <div class="px-4 py-5 px-md-5 text-center text-lg-start main" >
    <div class="container">
      <div class="row gx-lg-5 align-items-center">
        <div class="col-lg-6 mb-5 mb-lg-0">
          <h1 class="my-5 display-3 fw-bold ">
            Welcome To The <br />
            <span class="text-primary">Best Learning Platform</span>
          </h1>
          <p className='para_color'>
            Looking for the answers of your solutions? Join Us
          </p>
        </div>
        <div class="col-lg-6 mb-5 mb-lg-0">
          <div class="card mt-5">
            <div class="card-body py-5 px-md-5">
              <form>
                <div class="row">
                  <div class="col-md-6 mb-4">
                    <div class="form-outline">
                      <label class="form-label" for="form3Example1">First name</label>
                      <input type="text" id="form3Example1" class="form-control" />
                    </div>
                  </div>
                  <div class="col-md-6 mb-4">
                    <div class="form-outline">
                      <label class="form-label" for="form3Example2">Last name</label>
                      <input type="text" id="form3Example2" class="form-control" />
                    </div>
                  </div>
                </div>
                <div class="form-outline mb-4">
                  <label class="form-label" for="form3Example3">Email address</label>
                  <input type="email" id="form3Example3" class="form-control" />
                </div>
                <div class="form-outline mb-4">
                  <label class="form-label" for="form3Example4">Password</label>
                  <input type="password" id="form3Example4" class="form-control" />
                </div>
                <div class="form-outline mb-4">
                  <label class="form-label" for="form3Example4">Confirm Password</label>
                  <input type="password" id="form3Example4" class="form-control" />
                </div>
                <button type="submit" class="btn btn-primary btn-block mb-4 btn-dark btn-lg " >
                  Register
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    </>
  )
}

export default SignupForm