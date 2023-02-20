import { LoadingStyle, StyledLegend, Fieldset, Spin, Wave } from "./style";


const Loading = () => {
    return  <Fieldset>
                <StyledLegend>Kalkulator walut</StyledLegend> 
                <LoadingStyle>
                        <Wave>
                            ..Pobieramy dane
                        </Wave>
                        <Spin>
                            ⏳⌛️⏳ 
                        </Spin>
                </LoadingStyle>
            </Fieldset>
};

export default Loading;