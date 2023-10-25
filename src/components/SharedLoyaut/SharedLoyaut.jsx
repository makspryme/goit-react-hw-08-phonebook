import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Navigate, Outlet } from 'react-router-dom';
import { authLogOut } from 'redux/operation/operation';
import styled from 'styled-components';

export default function SharedLoyaut() {
  const isLogged = useSelector(state => state.auth.isLoggedIn);
  const email = useSelector(state => state?.auth?.user?.email);
  const dispatch = useDispatch();

  const StyledLink = styled(NavLink)`
    color: black;
    text-decoration: none;
    font-size: 24px;
    margin-right: 15px;

    &.active {
      color: orange;
    }
  `;

  const StyledNav = styled.nav({
    display: 'flex',
    justifyContent: 'space-evenly',
    textAlign: 'right',
    padding: 15,
    marginBottom: 30,
    marginLeft: 15,
    marginRight: 15,
    borderBottom: '2px solid black',
  });

  const StyledUserEmail = styled.p({
    textAlign: 'left',
    fontStyle: 'normal',
    margin: 0,
    marginRight: 15,
  });

  return (
    <>
      <StyledNav>
        <StyledLink to="/">Home</StyledLink>
        {!isLogged && (
          <>
            <StyledLink to="/register">Register</StyledLink>
            <StyledLink to="/login">Login</StyledLink>
          </>
        )}
        {isLogged && <Navigate to="/contacts" />}
        {isLogged && (
          <>
            <StyledUserEmail>{email}</StyledUserEmail>
            <StyledLink
              to="/"
              onClick={() => {
                dispatch(authLogOut());
                <Navigate to="/login" />;
              }}
            >
              Log Out
            </StyledLink>
          </>
        )}
      </StyledNav>
      <Outlet />
    </>
  );
}
