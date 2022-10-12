import React from 'react';
import PropTypes from 'prop-types';
import { Item, ButtonClose, Contact } from './ContactList.styled';
import { useSelector, useDispatch } from 'react-redux';
import { deleteC, getFilter, getItem } from 'redux/itemsContact';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getItem);
  const filter = useSelector(getFilter);

  function contactsFillet() {
    if (filter === '') {
      return false;
    }

    return contacts.filter(x => x.name.toLowerCase().includes(filter));
  }

  const fillter = contactsFillet();

  const list = fillter ? fillter : contacts;

  return (
    <ul>
      {list.map(({ id, name, number }) => {
        return (
          <Item key={id}>
            <Contact>
              {name}: {number}
            </Contact>
            <ButtonClose
              type="button"
              name={id}
              onClick={event => dispatch(deleteC(event.target.name))}
            >
              x
            </ButtonClose>
          </Item>
        );
      })}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

export default ContactList;