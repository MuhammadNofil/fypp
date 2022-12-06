import React from 'react'
import { FaSearch } from "react-icons/fa";
const primaryNavbar = () => {
  return (
    <>
    <nav className="navbar navbar-light bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand"><h3 className='text-white'>Company Name</h3></a>
    <form className="d-flex input-group w-auto">
      <input
        type="search"
        className="form-control rounded"
        placeholder="Search"
        aria-label="Search"
        aria-describedby="search-addon"
      />
      <span className="input-group-text border-0" id="search-addon">
       <FaSearch/>
      </span>
    </form>
  </div>
</nav>
    </>
  )
}

export default primaryNavbar