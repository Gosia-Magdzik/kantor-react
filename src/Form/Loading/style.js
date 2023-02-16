import styled from "styled-components";

export const LoadingStyle = styled.p`
    color: ${({theme}) => theme.color.MarigoldYellow};
    min-height: 50px;
    max-width: 250px;
    padding: 30px;
    text-align: center;
    font-family: monospace;
    border: 1px solid ${({theme}) => theme.color.black};
    border-radius: 15px;
    background-color: ${({theme}) => theme.color.jupiter};
`;