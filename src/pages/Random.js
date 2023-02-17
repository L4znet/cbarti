import logo from '../images/logo.svg';
import user from '../images/user.png';
import '../App.css';
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import thumbnail from "../images/thumbnail.png";
import Button from "../components/Button";


export default function Random() {

    const filters = ["Bar", "Cocktail"]
    return (
        <section className="wrapper">
            <header>
                <a href="src" class="logo"><img src={logo} alt="Le logo du site"/></a>
                <Navbar/>
            </header>
            <Card
                title="sfdsfdsfd"
                filters={filters}
                detail="sfdfsdsfdfd"
                time="Lundi au vendredi à partir de 18h"
                address="1 Rue d’Allemagne, 44000 Nantes"
                picture={thumbnail}/>
            <Button text="En choisir un autre" icon="fa-solid fa-shuffle"/>
        </section>
    )
}