import "./style.css"

function Counter (props) {
    const {numberOfItens} = props;
    return (

        <div className="counter">
            <p>Total:</p>
            <p>{numberOfItens}</p>
        </div>

    );
}

export default Counter;