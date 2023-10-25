import Home from './Home/Home';
import { Navigate, Route, Routes } from 'react-router-dom';
import Register from './Register/Register';
import Login from './Login/Login';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserToken } from 'redux/operation/operation';
import styled from 'styled-components';
import { useEffect } from 'react';
import Contact from './Contact/Contact';
import SharedLoyaut from './SharedLoyaut/SharedLoyaut';
import { ColorRing } from 'react-loader-spinner';

const Container = styled.div({
  marginLeft: 45,
  marginRight: 45,
});

export default function App() {
  const isLogged = useSelector(state => state.auth.isLoggedIn);
  const isLoading = useSelector(state => state.auth.isLoading);

  console.log(isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserToken());
  }, [dispatch]);

  return (
    <Container>
      <Routes>
        <Route path="/" element={<SharedLoyaut />}>
          {isLoading ? (
            <Route
              path="*"
              element={
                <ColorRing
                  visible={true}
                  height="80"
                  width="80"
                  ariaLabel="blocks-loading"
                  wrapperStyle={{
                    display: 'block',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    marginTop: '200',
                  }}
                  wrapperClass="blocks-wrapper"
                  colors={[
                    '#e15b64',
                    '#f47e60',
                    '#f8b26a',
                    '#abbd81',
                    '#849b87',
                  ]}
                />
              }
            />
          ) : (
            <>
              <Route index element={<Home />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" index element={<Login />} />
              {isLogged && <Route path="/contacts" element={<Contact />} />}
              <Route path="*" element={<Navigate to="/login" />} />
            </>
          )}
        </Route>
      </Routes>
    </Container>
  );
}
