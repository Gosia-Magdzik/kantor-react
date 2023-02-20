import { ErrorStyle, StyledLegend, Fieldset } from "./style";

const Error = () => {
    return  <Fieldset>
                <StyledLegend>Kalkulator walut</StyledLegend> 
                    <ErrorStyle>
                        Ups, Coś poszło nie tak ⚒️ <br/>
                        ....może nie masz internetu 🤔
                    </ErrorStyle>
            </Fieldset>
};

export default Error;