import { useState, useEffect } from "react";
import axios from "axios"

export const useRatesData = () => {
    const [ratesData, setRatesData] = useState ({
        status: "loading",
    });

    useEffect(() => {
        const getRates = async () => {
            try {
                const response = await axios.get("https://api.exchangerate.host/latest?base=PLN&symbols=USD,CZK,EUR,GBP,JOD,NOK,JPY,AUD,CAD,CHF,CNH,BGN,EGP,ILS&");
                    setRatesData({
                        date: response.data.date,
                        rates: response.data.rates,
                        status: "success",
                    });
            } catch (error) {
                console.error("Some error has occurred", error);
                setRatesData({
                    status: "error",
                });
            }
        };
        setTimeout(getRates, 2000);
    },  []);

    return ratesData;
};
