import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import {
  StyledButton,
  StyledForm,
  StyledInput,
  StyledLabel,
} from './App.styled';

export const ContactForm = ({ onAddContact, contacts }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleInputChange = e => {
    const { name, value } = e.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    const isNameExists = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isNameExists) {
      alert(`${name} is already in contacts`);

      setName('');
      setNumber('');
      return;
    }

    onAddContact({
      id: nanoid(),
      name: name.trim(),
      number: number.trim(),
    });

    setName('');
    setNumber('');
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledLabel>
        Name:
        <StyledInput
          type="text"
          name="name"
          value={name}
          onChange={handleInputChange}
          required
        />
      </StyledLabel>
      <StyledLabel>
        Number:
        <StyledInput
          type="text"
          name="number"
          value={number}
          onChange={handleInputChange}
          required
        />
      </StyledLabel>
      <StyledButton type="submit">Add Contact</StyledButton>
    </StyledForm>
  );
};
