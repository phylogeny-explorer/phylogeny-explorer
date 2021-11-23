import styled from "styled-components";
import React from "react";

const LoginContainer = styled.div`
    display: flex;
    margin-left: 10px;
`;

const RegisterButton = styled.button`
    border: 0;
    outline: 0;
    padding: 8px 1em;
    color: #fff;
    font-size: 14px;
    font-weight: 600;
    border-radius: 20px;
    
    background: #6adf76; 
    background: linear-gradient(to right, transparent 0%, #12c2f9 , #5eccf52  ); 
    
    transition: all 350ms ease-in-out;
    cursor: pointer;

    &:hover{
        background-color: #12c2f9;
    }

    &:not(:last-of-type) {
        margin-right: 9px;
    }

`
const LoginButton = styled.button`
    border: 0;
    outline: 0;
    padding: 8px 1em;
    color: #222;
    font-size: 16px;
    font-weight: 600;
    border-radius: 20px;
    border: 2px solid #5614B0;
    background-color: transparent;
 
    
    transition: all 350ms ease-in-out;
    cursor: pointer;

    &:hover{
        color: #fff;
        background-color: #12c2f9;
    }

    &:not(:last-of-type) {
        margin-right: 9px;
    }

`

export function Login(props) {
    return <LoginContainer>
        <RegisterButton>
            Register
        </RegisterButton>
        <LoginButton>
            Login
        </LoginButton>
    </LoginContainer>
}