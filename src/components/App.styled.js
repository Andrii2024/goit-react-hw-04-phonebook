import styled from 'styled-components';

export const StyledWrapper = styled.div`
  padding: 25px;
  display: flex;
  flex-direction: column;
  width: 300px;
  background-color: antiquewhite;
  border-radius: 10px;
  margin: 40px;
  box-shadow: 3px 3px 3px 3px lightblue;
  gap: 10px;
`;
export const StyledButton = styled.button`
  display: block;
  padding: 5px;
  border-radius: 6px;
  background-color: aquamarine;
  cursor: pointer;
  transition: transform 0.4s;
  width: 180px;
  &:hover {
    background-color: aliceblue;
    color: black;
    box-shadow: 2px 3px 3px skyblue;
    transform: scale(1.1);
  }
`;
export const StyledForm = styled.form`
  border: 1px solid;
  border-radius: 8px;
  width: 150px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 221px;
  padding: 15px;
`;
export const StyledInput = styled.input`
  margin-top: 5px;
  padding: 5px 5px 5px 10px;
  border-radius: 5px;
`;
export const StyledLabel = styled.label`
  margin-bottom: 6px;
`;
export const StyledLi = styled.li`
  display: flex;
  margin-bottom: 6px;
  align-items: center;
  justify-content: space-between;
`;
export const ContactList = styled.ul``;
export const StyledButtonList = styled.button`
  display: block;
  padding: 2px;
  border-radius: 3px;
  background-color: aquamarine;
  cursor: pointer;
  transition: transform 0.4s;
  width: 80px;
  &:hover {
    background-color: aliceblue;
    color: black;
    box-shadow: 2px 3px 3px skyblue;
    transform: scale(1.1);
  }
`;
