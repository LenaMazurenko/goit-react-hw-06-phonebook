import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/pb-actions';
import { getItems, getFilter } from 'redux/pb-selectors';
import { List, Item, Btn } from './ContactsList.styled';

export default function ContactsList() {
  const contacts = useSelector(getItems);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const findCont = () => {
    return contacts.filter(item =>
      item.name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  const resultContacts = findCont();

  return (
    <List>
      {resultContacts.map(item => (
        <Item key={item.id}>
          <p>
            &#9742; -- {item.name}- {item.number}
          </p>
          <Btn
            onClick={() => {
              dispatch(deleteContact(item.id));
            }}
          >
            Delete
          </Btn>
        </Item>
      ))}
    </List>
  );
}
