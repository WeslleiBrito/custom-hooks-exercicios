import { useCounter } from "../hooks/useCounter";
import { Item } from "./Item";

export const Cart = () => {
    const quantity = useCounter({ initial: 6, min: 5, max: 20 });

    return (
        <div>
            <h1>Meu carrinho</h1>
            <Item
                label="My produto massa"
                quantity={quantity.valor}
                onIncrement={quantity.somar}
                onDecrement={quantity.subtrair}
                onReset={quantity.reset}
                stepDecrement={2}
                stepIncrement={3}
            />
        </div>
    );
};
