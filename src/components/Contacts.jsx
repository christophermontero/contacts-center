import React, { useReducer } from "react";
import ContactsBoard from "./ContactsBoard";
import FormAddContact from "./FormAddContact";
import { ContactsReducer } from "./reducers/ContactsReducer.js";

const contacts = [
  {
    id: "1",
    name: "Richard Stallman",
    phone: "12345678",
  },
  {
    id: "2",
    name: "Steve Jobs",
    phone: "12345679",
  },
];

const Contacts = () => {
  const [state, dispatch] = useReducer(ContactsReducer, contacts);

  return (
    <div className="container mt-3">
      <FormAddContact dispatch={dispatch} />
      <ContactsBoard contacts={state} />
    </div>
  );
};

export default Contacts;
