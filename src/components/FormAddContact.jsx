import React, { useState } from "react";
import { v4 as uuid } from "uuid";
//import PropTypes from "prop-types";

const FormAddContact = ({ dispatch }) => {
  const [data, setData] = useState({ name: "", phone: "" });
  const { name, phone } = data;

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const actionAdd = {
    type: "add",
    payload: {
      id: uuid(),
      name,
      phone,
    },
  };

  const handleAdd = () => {
    dispatch(actionAdd);
  };

  return (
    <>
      <label className="mx-1 d-grid gap-2">Name: </label>
      <input
        onChange={handleChange}
        name="name"
        value={name}
        type="text"
        className="form-control"
        autoComplete="off"
      />
      <label className="mx-1 d-grid gap-2">Phone: </label>
      <input
        onChange={handleChange}
        name="phone"
        value={phone}
        type="text"
        className="form-control"
        autoComplete="off"
      />
      <div className="mx-1 my-2 d-grid gap-2">
        <button onClick={handleAdd} className="btn btn-info">
          Add
        </button>
      </div>
    </>
  );
};

//FormAddContact.propTypes = {
//dispatch: PropTypes.object,
//};

export default FormAddContact;
