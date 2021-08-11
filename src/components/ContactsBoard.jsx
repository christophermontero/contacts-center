import React from 'react'
import PropTypes from 'prop-types'

const ContactsBoard = ({ contacts }) => {
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
            return <tr key={contact.id}>
              <th>{contact.id}</th>
              <td>{contact.name}</td>
              <td>{contact.phone}</td>
              <td>
                <button className="btn btn-danger">Delete</button>
              </td>
            </tr>
          })}
        </tbody>
      </table>
    </div>
  )
};

ContactsBoard.propTypes = {
  contacts: PropTypes.array
}

export default ContactsBoard
