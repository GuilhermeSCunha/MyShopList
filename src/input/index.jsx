import "./style.css"

function Input (props) {
    const {change, data} = props;
    return (
        <input className = 'input' type="text" name="list-item" value={data} onChange={change}/>
    );
}

export default Input; 