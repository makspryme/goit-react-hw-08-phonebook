import { changeFilter } from 'redux/store';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

const StyledLabel = styled.label({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  marginBottom: 20,
  marginLeft: 'auto',
  marginRight: 'auto',
  width: 300,
  fontSize: 18,
});

const StyledInput = styled.input({
  marginTop: 5,
  padding: 3,
  fontSize: 16,
  borderRadius: 5,
});

export default function Filter() {
  const dispatch = useDispatch();

  const filterValue = useSelector(store => store.filter);
  function onChange(e) {
    dispatch(changeFilter(e.currentTarget.value));
  }

  return (
    <StyledLabel>
      Find contact by name
      <br />
      <StyledInput
        type="text"
        name="filter"
        value={filterValue}
        onChange={onChange}
      />
    </StyledLabel>
  );
}
