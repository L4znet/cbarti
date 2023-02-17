import Card from "./Card";
import thumbnail from "../images/thumbnail.png";
import Button from "./Button";

export default function Cards() {
    const filters = ["Bar", "Cocktail"]
    return (
        <>
            <section className="places">
                <Card
                    title="sfdsfdsfd"
                    filters={filters}
                    detail="sfdfsdsfdfd"
                    time="Lundi au vendredi à partir de 18h"
                    address="1 Rue d’Allemagne, 44000 Nantes"
                    picture={thumbnail}/>
                <Card
                    title="sfdsfdsfd"
                    filters={filters}
                    detail="sfdfsdsfdfd"
                    time="Lundi au vendredi à partir de 18h"
                    address="1 Rue d’Allemagne, 44000 Nantes"
                    picture={thumbnail}/>
                <Card
                    title="sfdsfdsfd"
                    filters={filters}
                    detail="sfdfsdsfdfd"
                    time="Lundi au vendredi à partir de 18h"
                    address="1 Rue d’Allemagne, 44000 Nantes"
                    picture={thumbnail}/>
            </section>
            <Button text="Charger plus" icon="fa-sharp fa-solid fa-chevron-down"/>
        </>
    )
}