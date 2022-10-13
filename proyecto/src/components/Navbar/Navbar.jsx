import logo from "../Navbar/logo1.png"
import "./Navbar.css"
import CartWidget from "../CartWidget/assets/CartWidget"
import {Link} from "react-router-dom"


export default function Navbar () {
    return (
        <div>
            <header>
                <div className="img-logo">
                    <img src="{logo}" alt="logo" />
                </div>
                <nav>
                    <ul>
                        <li>
                          INICIO
                        </li>
                        <li>
                            <Link to= '/category/PRODUCTOS'>
                            <a id="item">PRODUCTOS</a>
                            </Link>
                        </li>
                        <li>
                            ENVIOS Y DEVOLUCIONES
                        </li>
                        <li>
                            CONTACTO
                        </li>
                        <li>
                            <a href="">
                                <CartWidget />
                            </a>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}