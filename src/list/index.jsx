import "./style.css";
import Button from "../button";

function List (props) {
    const {itens = [], removeItens} = props;
    return (
        <ul>
            {itens.map((Item, index) => <li className = 'itens' key = {index}>{Item} {<Button click = {removeItens.bind(this, Item)} buttonName = 'remove' />}</li>)}
        </ul>

    );
}

export default List;