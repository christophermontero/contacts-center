import React, { useEffect, useReducer, useState } from "react";
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

  const [formView, setFormView] = useState(false);

  return (
    <div className="container mt-3">
      <button
        onClick={() => setFormView(!formView)}
        className="btn btn-success"
      >
        {!formView ? "Add contact" : "Close"}
      </button>
      {formView && <FormAddContact dispatch={dispatch} />}
      <ContactsBoard contacts={state} dispatch={dispatch} />
    </div>
  );
};

export default Contacts;
