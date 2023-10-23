import { remove } from 'redux/store';
import { useDispatch, useSelector } from 'react-redux';

export default function ContactList() {
  const valueContacts = useSelector(store => store.contacts);
  const filterValue = useSelector(store => store.filter);
  const dispatch = useDispatch();

  const filtered =
    valueContacts.length > 0
      ? valueContacts.filter(contact => {
          return contact.name.toLowerCase().includes(filterValue.toLowerCase());
        })
      : '';

  return (
    <ul>
      {filtered.length > 0 &&
        filtered.map(contact => {
          return (
            <li key={contact.id} id={contact.id}>
              {`${contact.name} - ${contact.number}`}
              <button
                type="text"
                onClick={e => {
                  dispatch(remove(e.target.parentElement.id));
                }}
              >
                delete
              </button>
            </li>
          );
        })}
    </ul>
  );
}
