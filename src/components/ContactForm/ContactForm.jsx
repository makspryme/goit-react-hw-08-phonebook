import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContacts, getContacts } from 'redux/operation/operation';
import styled from 'styled-components';

const StyledDivForm = styled.div({
  marginLeft: 'auto',
  marginRight: 'auto',
  marginTop: 100,
  width: 'max-content',
  padding: 30,
  backgroundColor: '#e6e6e6',
  border: '2px solid black',
  borderRadius: 15,
});

const StyledForm = styled.form({
  backgroundColor: '#e6e6e6',
});

const StyledLabel = styled.label({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  marginBottom: 20,
  width: 300,
  fontSize: 18,
});

const StyledInput = styled.input({
  marginTop: 5,
  padding: 3,
  fontSize: 16,
  borderRadius: 5,
});

const StyledButton = styled.button({
  display: 'block',
  marginLeft: 'auto',
  marginRight: 'auto',
  padding: 10,
  fontSize: 18,
  borderRadius: 5,

  '&:hover': {
    backgroundColor: 'orange',
    cursor: 'pointer',
  },
  '&:active': {
    backgroundColor: '#eecc90',
  },
});

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

    dispatch(addContacts(newContact));
    setTimeout(() => {
      dispatch(getContacts());
    }, 150);
  }

  function reset() {
    setName('');
    setNumber('');
  }

  return (
    <StyledDivForm>
      <StyledForm className="form-contact" onSubmit={e => handleSubmitForm(e)}>
        <StyledLabel className="label-contact">
          Name
          <StyledInput
            type="text"
            name="name"
            pattern="^[a-zA-Za-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            value={name}
            onChange={handleInputChange}
            required
          />
        </StyledLabel>
        <StyledLabel className="label-contact">
          Number
          <StyledInput
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            value={number}
            onChange={handleInputChange}
            required
          />
        </StyledLabel>
        <StyledButton className="btn-submit" type="submit">
          Add Contact
        </StyledButton>
      </StyledForm>
    </StyledDivForm>
  );
}
