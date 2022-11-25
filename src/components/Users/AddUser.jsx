import React from 'react';

const AddUser = () => {
  return (
    <div>
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h1 className="h2">Form Add User</h1>
            <div className="btn-toolbar mb-2 mb-md-0">
              <div className="btn-group me-2">
                <button type="button" className="btn btn-sm btn-outline-secondary">Back</button>
              </div>
            </div>
        </div>
        <form className="row g-3">
            <div className="col-md-6">
                <label className="form-label">Username</label>
                <input type="text" className="form-control" placeholder='masukan username'/>
            </div>
            <div className="col-md-6">
                <label className="form-label">Password</label>
                <input type="password" className="form-control" placeholder='************' />
            </div>
            <div className="col-md-6">
                <label className="form-label">Jabatan</label>
                <input type="text" className="form-control" placeholder='Jabatan'/>
            </div>
            <div className="col-md-6">
                <label className="form-label">Role</label>
                <select className="form-select">
                <option selected>Choose...</option>
                <option value="1">admin</option>
                <option value="2">user</option>
                </select>
            </div>
            <div className="col-12">
                <button className="btn btn-primary">Save</button>
            </div>
        </form>
    </div>
  )
}

export default AddUser;