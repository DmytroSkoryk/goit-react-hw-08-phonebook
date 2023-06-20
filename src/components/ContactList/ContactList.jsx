import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Filter from '../Filter/Filter';
import * as selectors from '../../redux/contacts/selectors';
import { deleteContacts } from 'redux/contacts/operations';
import css from './ContactList.module.css';

const getVisibleContacts = (contacts, filterContacts) => {
  if (contacts.length === 0) {
    return [];
  }
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterContacts)
  );
};

const ContactList = () => {
  const contacts = useSelector(selectors.selectContacts);
  const filterContacts = useSelector(selectors.selectFilter);
  const isLoading = useSelector(selectors.selectIsLoading);
  const error = useSelector(selectors.selectError);
  const visibleContacts = getVisibleContacts(contacts, filterContacts);
  const dispatch = useDispatch();
  const handleDelete = id => dispatch(deleteContacts(id));
  return (
    <section>
      <h2 className={css.contactsTitle}>Contacts</h2>
      <Filter />
      <ul className={css.contactList}>
        {isLoading && <b>Loading contacts...</b>}
        {error && <b>{error}</b>}
        {visibleContacts.map(({ id, name, number }) => (
          <li key={id} className={css.contactItem}>
            {name}: {number}
            <button
              type="button"
              className={css.delBtn}
              onClick={() => handleDelete(id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ContactList;
