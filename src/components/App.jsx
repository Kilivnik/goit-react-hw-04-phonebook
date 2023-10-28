import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';

import ContactForm from '../components/ContactForm/ContactForm';
import ContactList from '../components/ContactList/ContactList';
import Filter from '../components/Filter/Filter';

import s from './App.module.css';

export default function App() {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contacts')) || []
  );
  const [filter, setFilter] = useState('');

  const deleteContact = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  const addContact = contact => {
    contact.id = nanoid();
    for (const item of contacts) {
      if (item.name.toLowerCase() === contact.name.toLowerCase()) {
        alert(`${item.name} is already in contacts`);
        return;
      }
    }
    setContacts([...contacts, contact]);
  };
  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const changeFilter = event => {
    setFilter(event.target.value);
  };
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <div className={s.container}>
      <h1 className={s.title}>Phonebook</h1>
      <h2 className={s.text}>Add a new contact</h2>
      <ContactForm onSubmit={addContact} />
      <h2 className={s.text}>Contacts </h2>
      <Filter value={filter} onChange={changeFilter} />
      <ContactList
        contacts={filteredContacts}
        onDeleteContact={deleteContact}
      />
    </div>
  );
}

// class App extends Component {
//   state = {
//     contacts: [
//       { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
//       { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
//       { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
//       { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
//     ],
//     filter: '',
//   };

//   deleteContact = id => {
//     this.setState({
//       contacts: [...this.state.contacts.filter(contact => contact.id !== id)],
//     });
//   };

//   handleFilterChange = event => {
//     this.setState({
//       filter: event.currentTarget.value,
//     });
//   };

//   addContact = data => {
//     const contact = {
//       id: nanoid(),
//       name: data.name,
//       number: data.number,
//     };
//     for (const item of this.state.contacts) {
//       if (item.name.toLowerCase() === data.name.toLowerCase()) {
//         alert(`${item.name} is already in contacts`);
//         return;
//       }
//     }
//     this.setState(prevState => {
//       return {
//         contacts: [contact, ...prevState.contacts],
//       };
//     });
//   };

//   // Реализуэм сохранение контактов в localStorage
//   componentDidMount() {
//     const contacts = localStorage.getItem('contacts');
//     const parsedContacts = JSON.parse(contacts) ?? [];

//     if (parsedContacts) {
//       this.setState({ contacts: parsedContacts });
//     }
//   }

//   // Реализуэм сохранение контактов в localStorage
//   componentDidUpdate(prevProps, prevState) {
//     if (this.state.contacts !== prevState.contacts) {
//       localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//     }
//   }

//   render() {
//     const { contacts, filter } = this.state;
//     return (
//       <div className={s.container}>
//         <h1>Phonebook</h1>
//         <ContactForm addContact={this.addContact} contacts={contacts} />
//         <h2>Contacts</h2>
//         <Filter filter={filter} handleChange={this.handleFilterChange} />
//         <ContactList
//           contacts={contacts}
//           filter={filter}
//           deleteContact={this.deleteContact}
//         />
//       </div>
//     );
//   }
// }

// export { App };
