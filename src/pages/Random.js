import logo from '../images/logo.svg';
import '../App.css';
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import thumbnail from "../images/thumbnail.png";
import Button from "../components/Button";
import HeaderNav from "../components/HeaderNav";


export default function Random() {

    const filters = ["Bar", "Cocktail"]
    return (
        <section className="wrapper">
            <HeaderNav/>
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