import "./styles.css";
export function Item(props) {
    return (
        <div className="Item">
            <p className="label">{props.label}</p>
            <p className="qty">Quantidade: {props.quantity}</p>
            <button onClick={() => props.onDecrement(props.stepDecrement)}>-</button>
            <button onClick={() => props.onReset(props.resetValue)}>Restaurar</button>
            <button onClick={() => props.onIncrement(props.stepIncrement)}>+</button>
        </div>
    );
}
