import { createReducer, combineReducers } from '@reduxjs/toolkit';
import { addContact, deleteContact, findContact } from './pb-actions';

const defaultList = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const items = createReducer(defaultList, {
  [addContact.type]: (state, { payload }) => [...state, payload],
  [deleteContact.type]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
});

const filter = createReducer('', {
  [findContact.type]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});
