import { useSelector, useDispatch } from 'react-redux';
import { InputFilter, LabelFilter } from './Filter.styled';
import { setFilter } from 'redux/filterContacts';
import { getFilterContacts } from 'redux/filterContacts';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilterContacts);
  return (
    <LabelFilter htmlFor="filter">
      <InputFilter
        onChange={event =>
          dispatch(setFilter(event.target.value.toLowerCase()))
        }
        type="filter"
        value={filter}
        name="filter"
        required
        placeholder="Find contacts by name"
      />
    </LabelFilter>
  );
};

export default Filter;