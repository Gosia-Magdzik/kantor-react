import { currencies } from "../currencies";
import { useState } from "react";
import { Result } from "./Result";
import { Clock } from "../Clock";
import { 
    StyledForm,
    StyledFieldset,
    StyledLegend,
    StyledCurrency,
    StyledButton,
    StyledInput,
    Loading,
    Failure,
 } from "./styled";

export const Form = ({ calculateResult, result}) => {
        const [currency, setCurrency] = useState(currencies[0].short);
        const [amount, setAmount] = useState("");

        const onSubmit = (event) => {
            event.preventDefault();
            calculateResult(currency, amount);
    }

return (
        <StyledForm onSubmit={onSubmit}>
            <StyledFieldset>
                <Clock />
                <StyledLegend>Kalkulator walut</StyledLegend>
                <p>
                    <StyledCurrency>Kwota: </StyledCurrency>
                    <StyledInput
                        value={amount}
                        onChange= {({target}) => setAmount(target.value)}
                        type="number" 
                        step="0.1" 
                        name="zl" 
                        id="zl" 
                        required 
                        placeholder="   Wpisz kwotę w zł"
                    />
                </p>
                <p>
                    <span className="fieldset__currency">
                        Waluta*:
                    </span>
                    <StyledInput
                        as="select"
                        value={currency}
                        onChange= {({target}) => setCurrency(target.value)}
                    >
                        {currencies.map((currency => (
                            <option
                                key={currency.short}
                                value={currency.short}
                            >
                                {currency.name}
                            </option>
                        )))}
                    </StyledInput>
                </p>
                <p>
                    <StyledButton>PRZELICZ</StyledButton>
                </p>
                    <Result result={result} />
            </StyledFieldset>
        </StyledForm>
    );
};
