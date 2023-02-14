import { useState, useEffect } from "react";
import axios from "axios"

export const useRatesData = () => {
    const [ratesData, setRatesData] = useState ({
        state: "loading",
    });

    useEffect(() => {
        const getRates = async () => {
            try {
                    const response = await axios.get("https://api.exchangerate.host/latest?base=PLN");
                setRatesData({
                    date: response.data.date,
                    rate: response.data.rates,
                    status: "success",
                });
            } catch (error) {
                setRatesData({
                    status: "error",
                });
            }
        };
        setTimeout(getRates, 1000);
    },  []);
};
