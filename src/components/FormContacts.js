import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from 'redux/pb-actions';
import { getItems } from '../redux/pb-selectors';

import { Form, Label, SubmitBtn } from './FormContacts.styled';

export default function FormContacts() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(getItems);
  const dispatch = useDispatch();

  //=================================
  const handleChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  //=================================
  const handleSubmit = evt => {
    evt.preventDefault();

    if (contacts.find(item => item.name === name)) {
      alert(`${name} is already in contacts`);
    } else {
      dispatch(addContact(name, number));
    }

    reset();
  };

  //===========================================
  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        <br />
        Name
        <input
          type="text"
          placeholder="Vinny Pooch"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleChange}
        />
      </Label>

      <Label>
        Number
        <input
          type="tel"
          placeholder="+380800-00-00"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleChange}
        />
      </Label>

      <SubmitBtn type="submit">Add contact</SubmitBtn>
    </Form>
  );
}
