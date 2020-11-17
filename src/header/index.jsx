import "./style.css";
import groceryCart from"../images/grocery-cart.png";

function Header () {
    return (
        <div className = "header-container">
            <header>
                <h1>MyShopList</h1>
                <img className = "grocery-cart" src={groceryCart} alt="Grocery Cart"/>
            </header>
            <span>*para editar os itens digite a correção no campo de texto e click no botão "edit" do item que você deseja editar*</span>
        </div>
    );
}

export default Header;