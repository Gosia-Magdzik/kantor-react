import "./style.css";
import { currencies } from "../currencies";
import { useState } from "react";

export const Form = ({ calculateResult, result}) => {
    const [currency, setCurrency] = useState(currencies[0].short);
    const [amount, setAmount] = useState("");

    const onSubmit = (event) => {
        event.preventDefault();
        calculateResult(currency, amount);
    }

return (
        <fieldset className="fieldset" onSubmit={onSubmit}>
            <legend className="fieldset__legend">Kalkulator walut</legend>
            <p>
                <span className="fieldset__currency" for="zl">Kwota: </span>
                <input 
                    value={amount}
                    onChange= {({target}) => setAmount(target.value)}
                    className="fieldset__output" 
                    type="number" 
                    step="0.1" 
                    name="zl" 
                    id="zl" 
                    required 
                    placeholder="Wpisz kwotę w zł"
                />
            </p>
            <p>
                <span className="fieldset__currency">
                    Waluta*:
                </span>
                <select 
                    className="fieldset__output"
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
                </select>
            </p>
            <p>
                <button className="fieldset__button">PRZELICZ</button>
            </p>
            <p className="fieldset__result" for="wynik">Kwota po przeliczeniu:  
                <strong className="fieldset__output"></strong>
            </p>

            <p className="fieldset__paragraph">*kurs z 15 grudnia 2022 r. </p>
        </fieldset>
    );
};
