import styled from "styled-components";

export const StyleResult = styled.p`
    padding: 10px;
    border: 1px solid  ${({theme}) => theme.color.black};
    border-radius: 15px;
    max-width: 400px;
    background-color: ${({theme}) => theme.color.MarigoldYellow};
    margin: 0 auto;
    box-shadow: 2px 3px 4px ${({theme}) => theme.color.GrayNickel};
    text-align: center;
`;