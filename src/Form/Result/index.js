import { StyleResult } from "./styled";

export const Result = ({ result }) => (
    <StyleResult>
        {result && (
            <>
              Kwota po przeliczeniu&nbsp;={" "}
            
            <strong>
              {result.targetAmount.toFixed(2)}&nbsp;{result.currency}
            </strong>  
            </>
        )}
    </StyleResult>
);

