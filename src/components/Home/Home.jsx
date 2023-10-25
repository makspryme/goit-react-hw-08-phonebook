import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function Home() {
  const Greeting = styled.h1({
    textAlign: 'center',
  });

  const isLogged = useSelector(state => state.auth.isLoggedIn);

  return (
    <Greeting>
      Hello, maybe you want <Link to="/register">Register</Link> or
      <Link to="/login"> Login</Link> ?
    </Greeting>
  );
}
