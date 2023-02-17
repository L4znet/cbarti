import thumbnail from "../images/thumbnail.png"

export default function Card() {


    return (
        <>
            <article>
                <img src={thumbnail} alt=""/>
                <div>
                    <h2>Lorem ipsum dolor sit amet</h2>
                    <ul>
                        <li>Bar</li>
                        <li>Cocktail</li>
                        <li>Cocktail</li>
                        <li>Cocktail</li>
                    </ul>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis delectus dolor dolore, doloremque dolorum ducimus expedita, illo in iusto modi neque quam qui sed! Dolor fuga obcaecati odit qui quibusdam.</p>
                <div>
                    <small className="times">Ouvert du lundi au vendredi à partir de 18h</small>
                    <small className="address">1 Rue d'Allemagne, 44000 Nantes</small>
                </div>
            </article>
        </>

    )
}