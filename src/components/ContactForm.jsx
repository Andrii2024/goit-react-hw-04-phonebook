import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import {
  StyledButton,
  StyledForm,
  StyledInput,
  StyledLabel,
} from './App.styled';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleInputChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;
    const { contacts } = this.props;

    const isNameExists = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isNameExists) {
      alert(`${name} is already in contacts`);
      this.setState({ name: '', number: '' });
      return;
    }

    this.props.onAddContact({
      id: nanoid(),
      name: name.trim(),
      number: number.trim(),
    });

    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    return (
      <StyledForm onSubmit={this.handleSubmit}>
        <StyledLabel>
          Name:
          <StyledInput
            type="text"
            name="name"
            value={name}
            onChange={this.handleInputChange}
            required
          />
        </StyledLabel>
        <StyledLabel>
          Number:
          <StyledInput
            type="text"
            name="number"
            value={number}
            onChange={this.handleInputChange}
            required
          />
        </StyledLabel>
        <StyledButton type="submit">Add Contact</StyledButton>
      </StyledForm>
    );
  }
}
