import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { deleteContacts, getContacts } from 'redux/operation/operation';
import styled from 'styled-components';

const StyledList = styled.ol({
  width: 500,
  padding: 0,
  marginLeft: 'auto',
  marginRight: 'auto',
  fontSize: 20,
});

const StyledItem = styled.li({
  display: 'flex',
  justifyContent: 'flex-end',
  padding: 5,
  marginBottom: 15,
  border: '2px solid black',
  borderRadius: 5,
});

const StyledButton = styled.button({
  display: 'block',
  marginLeft: 'auto',
  padding: 5,
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

export default function ContactList() {
  const valueContacts = useSelector(store => store.contacts);
  const filterValue = useSelector(store => store.filter);
  const dispatch = useDispatch();

  const filtered =
    valueContacts.length > 0
      ? valueContacts.filter(contact => {
          return contact?.name
            .toLowerCase()
            .includes(filterValue.toLowerCase());
        })
      : '';

  const handleDeleteContacts = e => {
    dispatch(deleteContacts(e.target.parentElement.id));

    setTimeout(() => {
      dispatch(getContacts());
    }, 150);
  };

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <StyledList>
      {filtered.length > 0 &&
        filtered.map(contact => {
          return (
            <StyledItem key={contact.id} id={contact.id}>
              {`${contact.name} - ${contact.number}`}
              <StyledButton type="text" onClick={handleDeleteContacts}>
                delete
              </StyledButton>
            </StyledItem>
          );
        })}
    </StyledList>
  );
}
