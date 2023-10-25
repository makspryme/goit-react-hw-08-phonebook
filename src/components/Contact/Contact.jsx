import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';

export default function Contact() {
  return (
    <>
      <h1 style={{ textAlign: 'center' }}>Phonebook</h1>
      <ContactForm />
      <h2 style={{ textAlign: 'center' }}>Contacts</h2>
      <Filter />
      <ContactList />
    </>
  );
}
