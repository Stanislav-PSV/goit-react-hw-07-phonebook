import React from 'react';
import {
	Input,
	InputContainer,
	ButtonSubmit,
	Form
} from './ContactForm.styled';
import { useContactForm } from '../../hook/useContactForm';

export const ContactForm = () => {
	const { name, setName, phone, setPhone, onSubmit } = useContactForm();
	return (
		<Form onSubmit={onSubmit}>
			<InputContainer>
				<label htmlFor="name">
					<Input
						onChange={e => setName(e.target.value)}
						value={name}
						type="text"
						name="name"
						pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
						title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
						required
						placeholder="Name"
					/>
				</label>

				<label htmlFor="number">
					<Input
						onChange={e => setPhone(e.target.value)}
						value={phone}
						type="tel"
						name="number"
						pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
						title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
						required
						placeholder="Phone number"
					/>
				</label>
			</InputContainer>

			<ButtonSubmit type="submit">ADD CONTACT</ButtonSubmit>
		</Form>
	);
};

export default ContactForm;