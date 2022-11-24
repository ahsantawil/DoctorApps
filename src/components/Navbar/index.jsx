import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../logo.png';

const Index = () => {
  return (
    <header class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
      <NavLink className="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6">
        <img src={Logo} className="navbar-item" alt="Logo" />
      </NavLink>
      <button class="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="navbar-nav">
        <div class="nav-item text-nowrap">
            <NavLink to={'/'} className="nav-link px-3"> Sign Out</NavLink>
        </div>
      </div>
    </header>
  )
}

export default Index;