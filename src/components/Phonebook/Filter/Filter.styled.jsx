import styled from '@emotion/styled';

export const InputFilter = styled.input`
	height: 40px;
	margin: 0;
	padding: 0 15px 0 15px;
	border-radius: 5px;
	border: 1px solid #000000;

	&:not(:last-child){
		margin-right: 10px;
	}
`

export const LabelFilter = styled.label`
margin: 10px 0 10px 0;
display: flex;
flex-direction: column;
font-size: 22px;
color: #D3D3D3;
`