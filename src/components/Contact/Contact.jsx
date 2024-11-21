import { IoIosContact } from "react-icons/io";
import { MdPhoneInTalk } from "react-icons/md";
import s from "./Contact.module.css";

const Contact = ({ id, number, name, onDelete }) => {
  return (
    <li className={s.item}>
      <div>
        <div className={s.context}>
          <IoIosContact />
          <span>{name}</span>
        </div>
        <div className={s.context}>
          <MdPhoneInTalk />
          <a href={`tel: ` + number}>{number}</a>
        </div>
      </div>
      <button onClick={() => onDelete(id)} type="button">
        Delete
      </button>
    </li>
  );
};

export default Contact;
