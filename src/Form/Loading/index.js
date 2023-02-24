import { LoadingStyle, StyledLegend, Fieldset, Spin, Wave } from "./style";

const string = "Pobieramy".split("")

const Loading = () => {
    return  <Fieldset>
                <StyledLegend>Kalkulator walut</StyledLegend> 
                <LoadingStyle>
                        <Wave>
                            {string.map((item, index) => (
                            <span key={index}>
                                {item}
                            </span>
                            ))}
                        </Wave>
                        <Spin>
                            ⏳⌛️⏳ 
                        </Spin>
                </LoadingStyle>
            </Fieldset>
};

export default Loading;