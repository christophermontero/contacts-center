import React, { useEffect, useReducer } from "react";
import ContactsBoard from "./ContactsBoard";
import FormAddContact from "./FormAddContact";
import { ContactsReducer } from "./reducers/ContactsReducer.js";

const init = () => {
  const contacts = localStorage.getItem("contacts");

  return contacts ? JSON.parse(contacts) : [];
};

const Contacts = () => {
  const [state, dispatch] = useReducer(ContactsReducer, [], init);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(state));
  }, [state]);

  return (
    <div className="container mt-3">
      <FormAddContact dispatch={dispatch} />
      <ContactsBoard contacts={state} dispatch={dispatch} />
    </div>
  );
};

export default Contacts;
