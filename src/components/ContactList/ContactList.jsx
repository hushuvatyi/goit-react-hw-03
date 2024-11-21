import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";

const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul className={s.contactList}>
      {contacts.map(({ id, number, name }) => (
        <Contact
          key={id}
          id={id}
          number={number}
          name={name}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
};

export default ContactList;
