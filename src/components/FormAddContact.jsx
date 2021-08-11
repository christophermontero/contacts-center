import React from 'react';
// import PropTypes from 'prop-types';

const FormAddContact = () => {
  return (
    <div>
      <label className="mx-1 d-grid gap-2">Name: </label>
      <input type="text" className="form-control" autoComplete="off" />
      <label className="mx-1 d-grid gap-2">Phone: </label>
      <input type="text" className="form-control" autoComplete="off" />
      <div className="mx-1 my-2 d-grid gap-2">
        <button className="btn btn-info">Add</button>
      </div>
    </div>
  )
}

// FormAddContact.propTypes = {

// }

export default FormAddContact;
