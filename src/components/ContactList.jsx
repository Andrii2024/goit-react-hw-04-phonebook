import React from 'react';
import { StyledButtonList, StyledLi } from './App.styled';

export const ContactList = ({ contacts, onClickDelete }) => (
  <ul>
    {contacts.map(contact => (
      <StyledLi key={contact.id}>
        {contact.name} - {contact.number}
        <StyledButtonList onClick={() => onClickDelete(contact.id)}>
          Delate
        </StyledButtonList>
      </StyledLi>
    ))}
  </ul>
);
