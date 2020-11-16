import "./style.css"

function List (props) {
    const {itens = []} = props;
    return (
        <ul>
            {itens.map((Item, index) => <li key = {index}>{Item}</li>)}
        </ul>

    );
}

export default List;