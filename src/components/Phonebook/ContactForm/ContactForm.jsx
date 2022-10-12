import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import {
	Input,
	InputContainer,
	ButtonSubmit,
	Form,
} from './ContactForm.styled';
import { useSelector, useDispatch } from 'react-redux';
import { filterValue, getItem, newContacts } from 'redux/itemsContact';

const INITIAL_STATE = {
	name: '',
	number: '',
};

export default function ContactForm() {
	const [{ name, number }, setState] = useState(INITIAL_STATE);
	const dispatch = useDispatch();
	const contacts = useSelector(getItem);

	function onChange(eve) {
		const { name, value } = eve.target;
		setState(prevState => ({ ...prevState, [name]: value }));
	}

	function onSubmit(eve) {
		eve.preventDefault();
		const newC = {
			id: nanoid(5),
			name,
			number,
		};

		if (contacts.some(x => x.name === newC.name)) {
			alert(`${newC.name} is already is contacts`);
			return;
		}

		dispatch(newContacts(newC));
		dispatch(filterValue(''));

		setState({ ...INITIAL_STATE });
	}

	return (
		<Form onSubmit={onSubmit}>
			<InputContainer>
				<label htmlFor="name">
					<Input
						onChange={onChange}
						type="text"
						name="name"
						pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
						title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
						value={name}
						required
						placeholder="Name"
					/>
				</label>

				<label htmlFor="number">
					<Input
						onChange={onChange}
						type="tel"
						name="number"
						pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
						title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
						value={number}
						required
						placeholder="Phone number"
					/>
				</label>
			</InputContainer>

			<ButtonSubmit type="submit">ADD CONTACT</ButtonSubmit>
		</Form>
	);
}
