import "./style.css"

function Input (props) {
    const {change} = props;
    return (
        <input className = 'input' type="text" name="list-item" onChange={change}/>
    );
}

export default Input; 