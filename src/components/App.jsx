import { Filter } from './Phonebook/Filter/Filter';
import ContactForm from './Phonebook/ContactForm/ContactForm';
import ContactList from './Phonebook/ContactList/ContactList';
import { AppContainer, Container, TitleMain, Title } from './App.styled';

export default function App() {
  return (
    <AppContainer>
      <Container>
        <TitleMain>Phonebook</TitleMain>
        <ContactForm />
      </Container>
      <Container>
        <Title>Contacts</Title>
        <Filter />
        <ContactList />
      </Container>
    </AppContainer>
  );
}
