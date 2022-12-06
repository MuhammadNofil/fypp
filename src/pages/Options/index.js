import React from 'react'
import '../../styles/Option.css'
import BasicModal from '../../components/shared/modal'
const Options = () => {
  return (
    <>
    <BasicModal/>
      <div className="px-4 py-5 px-md-5 text-center text-lg-start main" >
    <div className="container">
      <div className="row gx-lg-5 align-items-center">
        <div className="col-lg-6 mb-5 mb-lg-0">
          <h1 className="my-5 display-3 fw-bold ">
            The best PlatForm <br />
            <span className="text-primary">To Learn</span>
          </h1>
          <p className='para_color'>
            Looking for the answers of your solutions? Join Us
          </p>
        </div>

        <div className="col-lg-6 mb-5 mb-lg-0 pt-5">
          <div className="card ">
            <div className="card-body py-5 px-md-5">
                <h2 >CHOOSE THE MEDIUM OF YOUR QUESTIONS</h2>
              <h3 >1. TEXT FORM</h3>
              <h3>2. COMPILER</h3>
              <h3>3. CHART</h3>
              <h3>4. GRAPH</h3>
              <h3>5. DRAWING</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    </>
  )
}

export default Options