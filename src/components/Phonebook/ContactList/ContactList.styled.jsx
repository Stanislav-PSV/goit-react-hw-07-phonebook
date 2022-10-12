import styled from "@emotion/styled";

export const Item = styled.li`
&:not(:last-child){
	margin-bottom: 10px;
}
display: flex;
align-items: center;
justify-content: space-between;
font-size: 24px;
`

export const Contact = styled.p`
margin-right: 10px;
font-size: 20px;

`

export const ButtonClose = styled.button`
padding: 0 5px 5px 5px;
font-size: 20px;
width: 30px;
background-color: #C0C0C0;
border: 1px solid #000000;
border-radius: 5px;
color: #000000;
`