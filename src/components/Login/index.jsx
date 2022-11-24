import React from 'react';
import { IoMailSharp, IoKeyOutline } from 'react-icons/io5';
import Logo from '../../logo.png';

const Index = () => {
  return (
    <div className='text-center mt-5'>
        <main className="form-signin w-100 m-auto">
            <form>
                <img className="mb-5" src={Logo} alt="" width="60" height="40" />
                    <h1 className="h3 mb-2 fw-normal">Welcome to AFIS</h1>
                    <p className='fw-normal'>Aftersales Information System</p>
                <div className="form-floating">
                    <input type="text" className="form-control" id="floatingInput" placeholder="Username" />
                    <label for="floatingInput"><IoMailSharp/> Username</label>
                </div>
                <div className="form-floating">
                    <input type="password" className="form-control mt-3" id="floatingPassword" placeholder="Password" />
                    <label for="floatingPassword"><IoKeyOutline /> Password</label>
                </div>
                <button className="w-50 btn btn-lg btn-primary" type="submit">Sign in</button>
                <p className="mt-5 mb-3 text-muted">&copy; 2022 TSR Engineer</p>
            </form>
        </main>
    </div>
  )
}

export default Index;