import React from "react";
import PropTypes from "prop-types";

const ContactsBoard = ({ contacts = [], dispatch }) => {
  const handleDelete = (id) => {
    const deleteAction = {
      type: "delete",
      payload: id,
    };

    dispatch(deleteAction);
  };

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => {
            const displayId = contact.id.split("-");

            return (
              <tr key={contact.id}>
                <th>{displayId[0]}</th>
                <td>{contact.name}</td>
                <td>{contact.phone}</td>
                <td>
                  <button
                    onClick={() => handleDelete(contact.id)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

ContactsBoard.propTypes = {
  contacts: PropTypes.array,
};

export default ContactsBoard;
