import {Link} from "react-router-dom";
import logo from "../images/logo.svg";
import Navbar from "./Navbar";

export default function HeaderNav() {


    return (
        <>
            <header>
                <Link class="logo" to={"/"}><img src={logo} alt="Le logo du site"/></Link>
                <Navbar/>
            </header>
        </>
    )
}