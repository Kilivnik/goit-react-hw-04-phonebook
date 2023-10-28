import ContactListItem from '../ContactListItem/ContactListItem';
import s from './ContactList.module.css';

export default function ContactList({ contacts, filter, onDeleteContact }) {
  return (
    <ul className={s.contactList}>
      {filter
        ? contacts
            .filter(({ name }) =>
              name.toLowerCase().includes(filter.toLowerCase())
            )
            .map(({ name, number, id }) => (
              <ContactListItem
                name={name}
                number={number}
                key={id}
                handleClick={() => onDeleteContact(id)}
              />
            ))
        : contacts.map(({ name, number, id }) => (
            <ContactListItem
              name={name}
              number={number}
              key={id}
              handleClick={() => onDeleteContact(id)}
            />
          ))}
    </ul>
  );
}
