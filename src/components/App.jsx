import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactsList } from './ContactList/ContactsList';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';

export const App = () => {
  const contacts = useSelector(state => state.contacts.data);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts(filter));
  }, [filter, dispatch]);

  return (
    <>
      <h2>Phonebook</h2>
      <ContactForm />
      <h3>Contacts:</h3>
      <Filter />
      <ContactsList myContacts={contacts} />
    </>
  );
};
