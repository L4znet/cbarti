import Profil from "./Profile";
import Profile from "./Profile";
import {Link} from "react-router-dom";

export default function Navbar(){
    return (
        <>
            <nav>
                <ul>
                    <li><Link to={"/random"}>Un bar random</Link></li>
                    <li><Link to={"/new"}>Ajouter un lieu</Link></li>
                </ul>
                <Profile id="1" username="Laznet"/>
            </nav>
        </>
    )
}