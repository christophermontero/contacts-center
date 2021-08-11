import React from 'react';
import ContactsBoard from './ContactsBoard';
import FormAddContact from './FormAddContact';

const Contacts = () => {
  const contacts = [
    {
      id: 1,
      name: "Richard Stallman",
      phone: "12345678"
    },
    {
      id: 2,
      name: "Steve Jobs",
      phone: "12345679"
    }
  ];

  return (
    <div className="container mt-3">
      <FormAddContact />
      <ContactsBoard contacts={contacts} />
    </div>
  )
}

export default Contacts;
