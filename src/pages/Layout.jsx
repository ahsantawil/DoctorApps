import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

const Layout = ({children}) => {
  return (
    <>
        <Navbar />
        <div className="container-fluid" style={{ minHeight: '100vh' }}>
            <div className="row">
                <Sidebar />
            </div>
                <main className='col-md-9 ms-sm-auto col-lg-10 px-md-4'>
                    {children}
                </main>
        </div>
    </>
  )
}

export default Layout;