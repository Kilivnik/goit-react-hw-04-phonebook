import { nanoid } from 'nanoid';
import s from './Filter.module.css';

export default function Filter({ filter, onChange }) {
  const inputId = nanoid();
  return (
    <>
      <label htmlFor={inputId} className={s.label}>
        Find contacts by name
      </label>
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={onChange}
        className={s.input}
      />
    </>
  );
}
