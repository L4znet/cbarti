import Profil from "./Profile";
import Profile from "./Profile";

export default function Navbar(){
    return (
        <>
            <nav>
                <ul>
                    <li><a href="">Un bar random</a></li>
                    <li><a href="">Ajouter un lieu</a></li>
                </ul>
                <Profile id="1" username="Laznet"/>
            </nav>
        </>
    )
}