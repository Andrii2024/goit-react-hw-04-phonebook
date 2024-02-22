import React, { useEffect, useState } from 'react';

import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';
import { Filter } from './Filter';
import { StyledWrapper } from './App.styled';

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const storedContacts = localStorage.getItem('contacts');
    if (storedContacts) {
      setContacts(JSON.parse(storedContacts));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleAddContact = newContact => {
    setContacts(prevContacts => [...prevContacts, newContact]);
  };

  const handleFilterChange = e => {
    setFilter(e.target.value.toLowerCase());
  };
  const handleDeleteUser = id => {
    setContacts(prevContacts =>
      prevContacts.filter(contacts => contacts.id !== id)
    );
  };

  const filteredContacts = contacts.filter(contacts =>
    contacts.name.toLowerCase().includes(filter)
  );
  return (
    <StyledWrapper>
      <h1>Phone Book</h1>
      <ContactForm onAddContact={handleAddContact} contacts={contacts} />
      <h2>Contacts</h2>
      <Filter filter={filter} onChange={handleFilterChange} />
      <ContactList
        contacts={filteredContacts}
        onClickDelete={handleDeleteUser}
      />
    </StyledWrapper>
  );
};

// /
// import React from 'react';
// import { Component } from 'react';
// import { ContactForm } from './ContactForm';
// import { ContactList } from './ContactList';
// import { Filter } from './Filter';
// import { StyledWrapper } from './App.styled';

// export class App extends React.Component {
//   state = {
//     contacts: [ { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
// { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
// { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
// { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },],
//     filter: '',
//   };

//   componentDidMount() {
//     const storedContacts = localStorage.getItem('contacts');
//     if (storedContacts) {
//       this.setState({ contacts: JSON.parse(storedContacts) });
//     }
//   }
//   componentDidUpdate(prevProps, prevState) {
//     const { contacts } = this.state;
//     if (prevState !== contacts) {
//       localStorage.setItem('contacts', JSON.stringify(contacts));
//     }
//   }

//   handleAddContact = newContact => {
//     this.setState(prevState => ({
//       contacts: [...prevState.contacts, newContact],
//     }));
//   };

//   handleFilterChange = e => {
//     this.setState({ filter: e.target.value.toLowerCase() });
//   };
//   handleDeleteUser = id => {
//     this.setState(prev => ({
//       contacts: prev.contacts.filter(contacts => contacts.id !== id),
//     }));
//   };

//   render() {
//     const { contacts, filter } = this.state;
//     const filteredContacts = contacts.filter(contact =>
//       contact.name.toLowerCase().includes(filter)
//     );

//     return (
//       <StyledWrapper>
//         <h1>Phone Book</h1>
//         <ContactForm
//           onAddContact={this.handleAddContact}
//           contacts={this.state.contacts}
//         />
//         <h2>Contacts</h2>
//         <Filter filter={filter} onChange={this.handleFilterChange} />
//         <ContactList
//           contacts={filteredContacts}
//           onClickDelete={this.handleDeleteUser}
//         />
//       </StyledWrapper>
//     );
//   }
// }
