

function App() {
  return (
    <form className="body">
        <fieldset className="fieldset">
            <legend className="fieldset__legend">Kalkulator walut</legend>
            <p>
                <span className="fieldset__currency" for="zl">Kwota: </span>
                <input className="fieldset__output" type="number" step="0.1" name="zl" id="zl" required placeholder="Wpisz kwotę w zł"/>
            </p>
            <p>
                <span className="fieldset__currency">Waluta*:</span>
                <select className="fieldset__output">
                    <option value="EUR">Euro</option>
                    <option value="GBP">Funt Brytyjski</option>
                    <option value="NOK">Korona Norweska</option>
                    <option value="USD">Dolar Amerykańki</option>
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
    </form>  
  );
}

export default App;
