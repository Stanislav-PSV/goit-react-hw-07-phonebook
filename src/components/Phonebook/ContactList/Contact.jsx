import PropTypes from 'prop-types';
import { MdDelete } from 'react-icons/md';
import { TailSpin } from 'react-loader-spinner';
import { Item, ButtonClose, NameContact } from './ContactList.styled';
import { useDelete } from '../../hook/useDelete';

export const Contact = ({ data: { phone, id, name } }) => {
  const { deleteContact, isLoading } = useDelete();

  return (
    <Item>
      <NameContact>
        {name}: {phone}
      </NameContact>
      <ButtonClose
        type="button"
        onClick={() => deleteContact(id)}
        disabled={isLoading}
      >
        {isLoading ? (
          <TailSpin height="20" width="20" />
        ) : (
          <MdDelete size={20} />
        )}
      </ButtonClose>
    </Item>
  );
};

Contact.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }),
};
