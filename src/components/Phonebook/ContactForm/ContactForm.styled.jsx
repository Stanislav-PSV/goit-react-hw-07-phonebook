import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const InputContainer = styled.div`
  width: 100%;
  margin: 0;
  padding: 0;
  margin: 10px 0 10px 0;
  display: flex;
  justify-content: center;
  align-items: center;

  & label {
    display: flex;
  flex-direction: column;
  font-size: 22px;
  color: #D3D3D3;

  &:not(:last-child){
    margin-right: 10px;
  }
  }
`

export const Input = styled.input`
  border: 1px solid #000000;
  width: 200px;
  height: 40px;
  margin: 0;
  padding: 0 15px 0 15px;
  border-radius: 5px;
`

export const ButtonSubmit = styled.button`
  width: 200px;
  height: 40px;
  border-radius: 5px;
  color: #000000;
  background-color: #C0C0C0;
  border: 1px solid #000000;
`