import "./style.css";
import Button from "../button";

function List (props) {
    const {itens = [], removeItens, editItens} = props;
    return (
        <ul>
            {itens.map((Item, index) => <li className = 'itens' key = {index}>{Item} {<Button click = {removeItens.bind(this, Item)} buttonName = 'remove' />} {<Button click = {editItens.bind(this, Item)} buttonName = 'edit' />}</li>)}
        </ul>

    );
}

export default List;