import { useSelector, useDispatch } from 'react-redux';
import { InputFilter, LabelFilter } from './Filter.styled';
import { filterValue, getFilter } from 'redux/itemsContact';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  return (
    <LabelFilter htmlFor="filter">
      <InputFilter
        onChange={event =>
          dispatch(filterValue(event.target.value.toLowerCase()))
        }
        type="filter"
        value={filter}
        name="filter"
      />{' '}
      Find contacts by name
    </LabelFilter>
  );
};

export default Filter;