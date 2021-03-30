import React from 'react'
import { Nav, Navbar } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'
import { NavLink } from 'react-router-dom'

const MyNavbar = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>Welcome from my world </Navbar.Brand>
        <Nav className="mr-auto">
          <NavLink exact to='/' className="nav-link" activeClassName="selected-link" >Home</NavLink>
          <NavLink to='/MovieApp' className="nav-link" activeClassName="selected-link">Listes Movies </NavLink>
        </Nav>
      </Navbar>

    </div>
  )
}

export default MyNavbar
