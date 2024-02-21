import React from 'react';
import { StyledInput, StyledLabel } from './App.styled';

export const Filter = ({ value, onChange }) => (
  <StyledLabel>
    Find contacts by name:
    <StyledInput type="text" name="filter" value={value} onChange={onChange} />
  </StyledLabel>
);
