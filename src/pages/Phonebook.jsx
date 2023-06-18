import { useSelector, useDispatch } from 'react-redux';
import { Filter } from 'components/Filter/Filter';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactsList } from 'components/ContactList/ContactsList';
import {
  selectContacts,
  selectError,
  selectIsLoading,
  selectFilter,
} from 'redux/selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';

const Phonebook = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const loading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
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
      {loading && !error && <b>Loading...</b>}
      <ContactsList myContacts={getVisibleContacts()} />
    </>
  );
};

export default Phonebook;
