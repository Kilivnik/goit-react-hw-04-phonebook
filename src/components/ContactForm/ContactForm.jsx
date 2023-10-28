import { useState } from 'react';
import { nanoid } from 'nanoid';
import s from '../ContactForm/ContactForm.module.css';

export default function ContactForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const nameInputId = nanoid(); // генерируем уникальный id для input
  const numberInputId = nanoid(); // генерируем уникальный id для input

  const handleChangeName = e => {
    setName(e.currentTarget.value);
  };

  const handleChangeNumber = e => {
    setNumber(e.currentTarget.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ name, number });
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit} className={s.form}>
      <label htmlFor={nameInputId} className={s.label}>
        Name
      </label>
      <input
        className={s.input}
        type="text"
        name="name"
        value={name}
        onChange={handleChangeName}
        id={nameInputId}
        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <label htmlFor={numberInputId} className={s.label}>
        Number
      </label>
      <input
        className={s.input}
        type="tel"
        name="number"
        value={number}
        onChange={handleChangeNumber}
        id={numberInputId}
        pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <button type="submit" className={s.button}>
        Add contact
      </button>
    </form>
  );
}
