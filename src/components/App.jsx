import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactsList } from './ContactList/ContactsList';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';

export const App = () => {
  const contacts = useSelector(state => state.contacts.data);
  const filter = useSelector(state => state.filter);
  const loading = useSelector(state => state.contacts.isLoading);
  const error = useSelector(state => state.contacts.error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const getVisibleContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <>
      <h2>Phonebook</h2>
      <ContactForm />
      <h3>Contacts:</h3>
      <Filter />
      {loading && !error && <b>In progress...</b>}
      <ContactsList myContacts={getVisibleContacts()} />
    </>
  );
};
