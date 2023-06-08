import { useDispatch } from 'react-redux';
// import { deleteContact } from 'redux/contactsSlice';
import PropTypes from 'prop-types';
import { deleteContact } from 'redux/operations';

export const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(contact.id));

  return (
    <>
      <span>
        {contact.name}: {contact.phone}
      </span>
      <button type="button" onClick={handleDelete}>
        delete
      </button>
    </>
  );
};

Contact.propTypes = {
  handleDelete: PropTypes.func,
};
