import { useState, useRef } from "react";
import { Result } from "./Result";
import { Clock } from "../Clock";
import { 
    StyledForm,
    StyledFieldset,
    StyledLegend,
    StyledCurrency,
    StyledButton,
    StyledInput,
    Info,
 } from "./styled";
 import Loading from "./Loading";
 import Error from "./Error";
 import { useRatesData } from "./useRatesData";

export const Form = () => {
        const [currency, setCurrency] = useState("EUR");
        const [amount, setAmount] = useState("");
        const [result, setResult] = useState();
        const ratesData = useRatesData();
        const { rates, date, status } = ratesData;
        const inputRef = useRef(null);

        const onSubmit = (event) => {
            event.preventDefault();
            calculateResult(amount, currency);
        };
            if (status === "loading") {
                return <Loading/>;
            }
            if (status === "error") {
                return <Error/>;
            }

        const calculateResult = (amount, currency) => {
            const rates = ratesData.rates[currency];
            inputRef.current.focus();
        }
            setResult({
                sourceAmount: +amount,
                targetAmount: amount * rates,
                currency,
            });

return (
        <StyledForm onSubmit={onSubmit}>
            <StyledFieldset>
                <Clock/>
                <StyledLegend>Kalkulator walut</StyledLegend>
                <p>
                    <StyledCurrency>Kwota: </StyledCurrency>
                    <StyledInput
                        value={ amount }
                        onChange= {({ target }) => setAmount(target.value)}
                        type="number" 
                        step="0.1" 
                        name="zl" 
                        id="zl" 
                        required 
                        placeholder="   Wpisz kwotę w zł"
                        ref={inputRef}
                    />
                </p>
                <p>
                    <span> Waluta:</span>
                    <StyledInput
                        as= "select"
                        value={ currency }
                        onChange= {({ target }) => {
                            setCurrency(target.value);
                        }}
                    >
                        {Object.keys(ratesData.rates).map((currency) => (
                            <option
                                key= {currency}
                                value= {currency}
                            > 
                                {currency}
                            </option>
                            ))}
                    </StyledInput>
                </p>
                <p>
                    <StyledButton>PRZELICZ</StyledButton>
                </p>
                    <Result result= {result} />
                <p>
                    <Info>Kursy walut pobierane są z Narodowego Banku Centrlnego na dzień: {date} </Info>
                </p>    
            </StyledFieldset>
        </StyledForm>
    );
};
