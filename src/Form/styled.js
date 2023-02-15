import styled from "styled-components";

export const StyledForm = styled.form`
    flex-basis: 600px;
    margin: 0 auto;
`;

export const StyledFieldset = styled.fieldset`
    border: 1px solid ${({theme}) => theme.color.black};
    border-radius: 15px;
    background-color: ${({theme}) => theme.color.jupiter};
    box-shadow: 5px 5px 200px 100px ${({theme}) => theme.color.PinkSwan};
`;

export const StyledLegend = styled.legend`
    border: 1px solid black;
    border-radius: 15px;
    max-width: 500px;
    margin: 10px;
    padding: 10px;
    background-color: ${({theme}) => theme.color.MarigoldYellow};
    color: black;
    font-weight: bold;
`;

export const StyledCurrency = styled.span`
    align-items: left;
    max-width: 200px;
    display: inline-block;
`;

export const StyledButton = styled.button`
    background-color:  ${({theme}) => theme.color.MarigoldYellow};
    color: ${({theme}) => theme.color.black};
    border: 1px solid ${({theme}) => theme.color.black};
    border-radius: 15px;
    width: 100%;
    max-width: 700px;
    margin: 10px;
    padding: 10px;
    margin-inline: 5px; 
    font-weight: bold;
    transition: background 0.3s;

    &:hover {
        filter: brightness(105%);
        transition: 0.5s;
        scale: 1.05;
    }

    &:active {
        filter: brightness(110%);
        box-shadow: 2px 3px 4px ${({theme}) => theme.color.GrayNickel};
        transition: 0.5s;
        scale: 1.08;
    }
`;

export const StyledInput = styled.input`
    border: 1px solid ${({theme}) => theme.color.black};
    border-radius: 15px;
    background-color: ${({theme}) => theme.color.jupiter};
    box-shadow: 5px 5px 15px  ${({theme}) => theme.color.PinkSwan};
    height: 30px;

    ::placeholder {
        color: ${({theme}) => theme.color.GrayNickel};
        font-style: italic;
        font-size: 0.9em;
    }
`;

export const Info = styled.p`
    text-align: center;
    font-family: monospace;
    color: ${({ theme }) => theme.color.black};
`;





