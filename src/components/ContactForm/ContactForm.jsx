import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add } from 'redux/store';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const valueContacts = useSelector(store => store.contacts);

  function handleInputChange(e) {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  }

  function handleSubmitForm(e) {
    e.preventDefault();
    reset();

    const newContact = {
      name,
      number,
    };

    for (const { name } of valueContacts) {
      if (name === newContact.name) {
        alert(`${name} is already in contacts`);
        return;
      }
    }

    dispatch(add(newContact));
  }

  function reset() {
    setName('');
    setNumber('');
  }

  return (
    <div>
      <form className="form-contact" onSubmit={e => handleSubmitForm(e)}>
        <label className="label-contact">
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Za-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            value={name}
            onChange={handleInputChange}
            required
          />
        </label>
        <label className="label-contact">
          Number
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            value={number}
            onChange={handleInputChange}
            required
          />
        </label>
        <button className="btn-submit" type="submit">
          Add Contact
        </button>
      </form>
    </div>
  );
}
