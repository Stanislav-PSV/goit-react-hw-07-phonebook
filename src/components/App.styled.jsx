import styled from '@emotion/styled';

export const AppContainer = styled.div`
box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.25);
display: flex;
height: 100vh;
justify-content: center;
font-size: 40px;
color: #000000;
`
export const Container = styled.div`
padding: 15px;
width: 440px;
box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.25);
&:not(:last-child){
	margin-right: 5px;
}
`

export const TitleMain = styled.h1`
text-align: center;
font-size: 72px;
`

export const Title = styled.h2`
text-align: center;
font-size: 72px;
`