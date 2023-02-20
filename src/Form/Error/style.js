import styled from "styled-components";

export const Fieldset = styled.fieldset`
    border: 1px solid ${({theme}) => theme.color.black};
    border-radius: 15px;
    background-color: ${({theme}) => theme.color.jupiter};
    box-shadow: 5px 5px 200px 100px ${({theme}) => theme.color.PinkSwan};
    flex-basis: 600px;
    height: 330px;
    margin: 0 auto;
`;

export const ErrorStyle = styled.p`
    font-weight: bold;
    color: ${({theme}) => theme.color.Tamarillo};
    text-align: center;
    font-family: monospace;
    padding: 50px;
    font-size: 30px;
    
`;

export const StyledLegend = styled.legend`
    border: 1px solid black;
    border-radius: 15px;
    max-width: 500px;
    margin: 10px;
    padding: 10px;
    background-color: ${({theme}) => theme.color.MarigoldYellow};
    color: black;
    font-family: 'Lato', sans-serif;
    font-weight: bold;
`;