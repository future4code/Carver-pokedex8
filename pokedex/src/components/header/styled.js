import styled from 'styled-components'

export const CustomHeader = styled.div`
width:100%;
height:150px;
background-color: red;
border-bottom: 2px solid black;
text-align: center;
display:flex;
flex-direction: row;
justify-content: space-between;
align-items:center;

h1{
    padding-right:50px;
}
`

export const LogoBackground = styled.img`
width:250px;
height:150px;
padding-left:50px;
`

export const Menu = styled.div`
display:flex;
flex-direction: row;
p{
    padding: 50px;
    font-size:25px;
}
`