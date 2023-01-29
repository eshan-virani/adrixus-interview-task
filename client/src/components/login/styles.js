import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Card = styled.div` 
width: 40%;
margin-left: auto;
margin-right: auto;
margin-top: 5rem;
border-radius: 1rem;
box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.11);
align-items: center;
padding: 5rem 8rem;
`;

export const LoginHeader = styled.h3`
font-size: 1.4em;
margin-top: 0px;
text-align: center;
text-transform: uppercase;
color: #000;
margin-bottom: 1.5rem;
`

export const Form = styled.form`
padding-top: 1.5rem;
;`


export const InputDiv = styled.div`
display: block;
width: 100%;
margin-bottom: 1.5rem;
`;

export const Label = styled.label`
font-size: 0.95em;
font-weight: 600;
`

export const Input = styled.input`
border-width: 1px;
border-style: solid;
border-radius: 0.50rem;
padding: 1rem;
outline: 0;
font-family: inherit;
font-size: 0.95em;
width: 100%;
margin-top: 1.5rem;
`
export const ForgotPass = styled.p`
text-align: end;
color: #000;
font-size: 0.95em;
font-weight: 400;
`

export const LoginButton = styled.button`
background-color: #000;
color: #fff;
margin: 1.5rem 0 1.5rem 0;
padding: 1rem;
font-size: 1.6rem;
font-weight: 600;
width: 100%;
border: none;
border-radius: 0.50rem;
`

export const BottomContent = styled.p`
text-align: center;
color: #000;
font-size: 0.95em;
font-weight: 400;
`

export const ErrorMsg = styled.p`
text-align: center;
color: red;
font-size: 2rem;
font-weight: 600;
`