import { createAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

export const addContact = createAction('contacts/add', (name, number) => ({
  payload: {
    name,
    number,
    id: nanoid(),
  },
}));
export const deleteContact = createAction('contacts/delete');
export const findContact = createAction('contacts/find');
