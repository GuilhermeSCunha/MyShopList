import "./style.css";
import groceryCart from"../images/grocery-cart.png";

function Header () {
    return (
        <header>
            <h1>MyShopList</h1>
            <img className = "grocery-cart" src={groceryCart} alt="Grocery Cart"/>
        </header>
    );
}

export default Header;