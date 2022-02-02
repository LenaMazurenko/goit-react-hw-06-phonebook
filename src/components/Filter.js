import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { findContact } from '../redux/pb-actions';
import { getFilter } from '../redux/pb-selectors';

export default function Filter() {
  const dispatch = useDispatch();
  const value = useSelector(getFilter);

  const onFind = e => dispatch(findContact(e.currentTarget.value));

  return (
    <label>
      Find contacts by name
      <br />
      <input
        type="text"
        name="find"
        value={value}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        onChange={onFind}
      />
    </label>
  );
}
