//import useLocalStorage from '../hooks/useLocalStorage';
import Wrapper from './Section';
import FormContacts from './FormContacts';
import Filter from './Filter';
import ContactsList from './ContactsList';

export default function App() {
  return (
    <Wrapper>
      <h1>Phonebook </h1>
      <FormContacts />
      <h2>Contacts</h2>
      <Filter />
      <ContactsList />
    </Wrapper>
  );
}
