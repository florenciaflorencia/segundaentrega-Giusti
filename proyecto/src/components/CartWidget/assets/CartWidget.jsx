import cart from "../assets/carrito.png";
import "../assets/CartWidget.css";

const CartWidget = () => {
    return (
        <div className="container-widget">
            <img src={cart} alt="cart" />
            <p>0</p>

        </div>
    )
}

export default CartWidget

