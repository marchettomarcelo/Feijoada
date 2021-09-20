import styled from "styled-components"


export const Main = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction:column;
    height: 100vh;
    

`
export const Calculadora =styled.div`

    padding:4px;
    display: flex;
    justify-content:center;
    align-items:center;
    flex-direction: column;
    

    width: 500px;
    height: 200px;
    background-color: #dfdfe5;

`

export const Header = styled.div`
    width: 100%;
    display: flex;
    flex-direction:row;
    justify-content: space-evenly;
    font-family: ${(props)=> props.theme.fontFamily? props.theme.fontFamily:"arial" };


`

export const Botao = styled.button`
    height: auto;
    width: 30%;

    font-size: 3rem;
    font-family: ${(props)=> props.theme.fontFamily? props.theme.fontFamily: "arial" };
    background-color: ${(props)=> props.bgcolor? props.bgcolor: "lightblue"};
`

export const H1 = styled.h1`
    font-family: ${(props)=> props.theme.fontFamily? props.theme.fontFamily: "Courier New" };

`

export const H2= styled.h2`
    font-family: ${(props)=> props.theme.fontFamily? props.theme.fontFamily: "arial" };

`


export const Theme = {
    "fontFamily": 'Graphik,-apple-system,system-ui,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Fira Sans","Droid Sans","Helvetica Neue",sans-serif',

}
