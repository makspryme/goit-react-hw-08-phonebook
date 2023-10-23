import { changeFilter } from 'redux/store';
import { useDispatch, useSelector } from 'react-redux';

export default function Filter() {
  const dispatch = useDispatch();

  const filterValue = useSelector(store => store.filter);
  function onChange(e) {
    dispatch(changeFilter(e.currentTarget.value));
  }

  return (
    <label>
      Find contact by name
      <br />
      <input
        type="text"
        name="filter"
        value={filterValue}
        onChange={onChange}
      />
    </label>
  );
}
