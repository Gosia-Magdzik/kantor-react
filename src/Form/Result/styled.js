import styled from "styled-components";

export const StyleResult = styled.p`
    padding: 10px;
    border: 1px solid  ${({theme}) => theme.color.black};
    border-radius: 15px;
    max-width: 200px;
    background-color: ${({theme}) => theme.color.azure};
`;