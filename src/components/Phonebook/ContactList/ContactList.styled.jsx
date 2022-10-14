import styled from "@emotion/styled";
import Skeleton from '../Loader/Skeleton';

export const PreLoader = styled(Skeleton)`
  margin-top: 20px;
`

export const List = styled.ul`
  margin-top: 20px;
  display: grid;
  gap: 15px;
`

export const Item = styled.li`
&:not(:last-child){
	margin-bottom: 10px;
}
display: flex;
align-items: center;
justify-content: space-between;
font-size: 24px;
`
export const NameContact = styled.p`
margin-right: 10px;
font-size: 20px;
`
export const ButtonClose = styled.button`
padding: 5px 5px 5px 5px;
font-size: 10px;
width: 30px;
`