import styled from "styled-components";

export const Fieldset = styled.fieldset`
    border: 1px solid ${({ theme }) => theme.color.black};
    border-radius: 15px;
    background-color: ${({ theme }) => theme.color.jupiter};
    box-shadow: 5px 5px 200px 100px ${({ theme }) => theme.color.PinkSwan};
    flex-basis: 600px;
    height: 350px;
    margin: 0 auto;
`;

export const LoadingStyle = styled.p`
    color: ${({ theme }) => theme.color.MarigoldYellow};
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
    background-color: ${({ theme }) => theme.color.MarigoldYellow};
    color: black;
    font-family: 'Lato', sans-serif;
    font-weight: bold;
`;

export const Spin = styled.p`
    animation: spin 2s ease infinite;
    @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(180deg) scale(1.1);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const Wave = styled.span`
    display: inline-block;
    
    span {
       animation: wave 1s  ease-in-out infinite; 
    }
    
        span:nth-child(1) { animation-delay: 0.1s; }
        span:nth-child(2) { animation-delay: 0.2s; }
        span:nth-child(3) { animation-delay: 0.3s; }
        span:nth-child(4) { animation-delay: 0.4s; }
        span:nth-child(5) { animation-delay: 0.5s; }
        span:nth-child(6) { animation-delay: 0.6s; }
        span:nth-child(7) { animation-delay: 0.7s; }
        span:nth-child(8) { animation-delay: 0.8s; }
        span:nth-child(9) { animation-delay: 0.9s; } 
    

    @keyframes wave{
        0%{
            transform: translateY(0px);
        }
        50%{
            transform: translateY(-15px);
        }
        100%{
            transform: translateY(0em);
        }
    }
`;

