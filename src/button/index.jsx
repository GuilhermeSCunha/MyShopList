import "./style.css";

function Button (props) {

    const {click, buttonName} = props;

    return(
    <button className = 'button' onClick={click}>{buttonName}</button>
    );
}

export default Button;