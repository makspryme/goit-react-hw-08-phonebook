import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authRegister } from 'redux/operation/operation';
import styled from 'styled-components';

const StyledDivForm = styled.div({
  marginLeft: 'auto',
  marginRight: 'auto',
  marginTop: 100,
  width: 'max-content',
  padding: 30,
  backgroundColor: '#e6e6e6',
  border: '2px solid black',
  borderRadius: 15,
});

const StyledForm = styled.form({
  backgroundColor: '#e6e6e6',
});

const StyledH1 = styled.h1({
  textAlign: 'center',
  textShadow: '1px 5px 15px black',
});

const StyledLabel = styled.label({
  display: 'flex',
  flexDirection: 'column',
  marginBottom: 20,
  width: 300,
  fontSize: 18,
});

const StyledInput = styled.input({
  marginTop: 5,
  padding: 3,
  fontSize: 16,
  borderRadius: 5,
});

const StyledButton = styled.button({
  display: 'block',
  marginLeft: 'auto',
  marginRight: 'auto',
  borderRadius: 5,
  padding: 10,
  fontSize: 18,

  '&:hover': {
    backgroundColor: 'orange',
    cursor: 'pointer',
  },
  '&:active': {
    backgroundColor: '#eecc90',
  },
});

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const onSubmit = e => {
    e.preventDefault();
    dispatch(authRegister({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <StyledDivForm>
      <StyledH1>Register</StyledH1>
      <StyledForm action="" onSubmit={onSubmit}>
        <StyledLabel>
          Name
          <StyledInput
            type="text"
            placeholder="Golovach Lena"
            value={name}
            onChange={e => {
              setName(e.currentTarget.value);
            }}
          />
        </StyledLabel>
        <StyledLabel>
          Email
          <StyledInput
            type="email"
            placeholder="misisipi@mail.com"
            value={email}
            onChange={e => {
              setEmail(e.currentTarget.value);
            }}
          />
        </StyledLabel>
        <StyledLabel>
          Password
          <StyledInput
            type="password"
            value={password}
            placeholder="qwerty123"
            onChange={e => {
              setPassword(e.currentTarget.value);
            }}
          />
        </StyledLabel>
        <StyledButton type="submit">Register</StyledButton>
      </StyledForm>
    </StyledDivForm>
  );
}
