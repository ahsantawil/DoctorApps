import React from 'react';
import { NavLink } from 'react-router-dom';
import {IoHome, IoNavigate, IoRefreshCircle, IoSyncCircle, IoPerson, IoPeople, IoCartSharp, IoSave} from 'react-icons/io5';

const Index = () => {
  return (
    <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
      <div className="position-sticky pt-3 sidebar-sticky">
        <ul className="nav flex-column">
          <li className="nav-item">
            <NavLink to={'/dashboard'} className="nav-link active text-start">
              <IoHome className='align-text-bottom'/>
               Dashboard
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to={'/pengiriman'} className="nav-link">
              <IoNavigate className="align-text-bottom" />
              Pengiriman
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to={'/klaim'} className="nav-link">
              <IoRefreshCircle className="align-text-bottom" />
                Klaim Garansi
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to={'/penggantian'} className="nav-link">
              <IoSyncCircle className="align-text-bottom" />
              Penggantian
            </NavLink>
          </li>
          {/* <li className="nav-item">
            <NavLink to={'/report'}>
              <span data-feather="bar-chart-2" className="align-text-bottom"></span>
              Reports
            </NavLink>
          </li> */}
        </ul>

        <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted text-uppercase">
          <span>Data Master</span>
        </h6>
        <ul className="nav flex-column mb-2">
          <li className="nav-item">
            <NavLink to={'/produk'} className="nav-link">
              <IoCartSharp className="align-text-bottom" />
                Produk
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to={'/customer'} className="nav-link">
              <IoPeople className="align-text-bottom" />
              Konsumen
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to={'/user'} className="nav-link">
              <IoPerson className="align-text-bottom" />
              User
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to={'/fis'} className="nav-link">
              <IoSave className="align-text-bottom" />
              Data FIS
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Index;