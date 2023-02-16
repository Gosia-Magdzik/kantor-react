import styled from "styled-components";

export const ErrorStyled = styled.p`
    color: ${({theme}) => theme.color.Tamarillo};
    text-align: center;
    font-family: monospace;
    font-weight: bold;
    min-height: 50px;
    max-width: 250px;
    padding: 30px;
    border: 1px solid ${({theme}) => theme.color.black};
    border-radius: 15px;
    background-color: ${({theme}) => theme.color.jupiter};
    
`;