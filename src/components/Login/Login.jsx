import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authLogin } from 'redux/operation/operation';
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
  padding: 10,
  fontSize: 18,
  borderRadius: 5,

  '&:hover': {
    backgroundColor: 'orange',
    cursor: 'pointer',
  },
  '&:active': {
    backgroundColor: '#eecc90',
  },
});

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const onSubmit = e => {
    e.preventDefault();
    dispatch(authLogin({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <StyledDivForm>
      <StyledH1>Login</StyledH1>
      <StyledForm action="" onSubmit={onSubmit}>
        <StyledLabel>
          Email
          <StyledInput
            type="email"
            name=""
            id=""
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
            name=""
            id=""
            value={password}
            onChange={e => {
              setPassword(e.currentTarget.value);
            }}
          />
        </StyledLabel>
        <StyledButton type="submit">Login</StyledButton>
      </StyledForm>
    </StyledDivForm>
  );
}
