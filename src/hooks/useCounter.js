import { useState } from "react";

export const useCounter = ({ initial, min, max }) => {

    const [quantity, setQuantity] = useState(min && min > initial ? min : initial);

    const increment = (step) => {
        setQuantity(step ? quantity + step : quantity + 1);
    };

    const decrement = (step) => {

        if (quantity > min) {
            if (((quantity - step) >= min) || ((quantity - 1) >= min && !step)) {

                setQuantity(step ? quantity - step : quantity - 1)
            } else if (step && (quantity - 1) >= min) {
                setQuantity(min)
            }

        } else if (!min) {
            setQuantity(step ? quantity - step : quantity - 1)
        }

    };

    const reset = (reset) => {
        setQuantity(reset ? reset : 0);
    };

    return {
        valor: quantity,
        somar: increment,
        subtrair: decrement,
        reset: reset
    };
};