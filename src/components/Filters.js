import Filter from "./Filter";


export default function Filters() {
    return (
        <ul class="filters">
            <Filter filterBgColor="#000" name="Bar"/>
            <Filter filterBgColor="#A2A" name="Restaurant"/>
            <Filter filterBgColor="#F20" name="Cocktail"/>
            <Filter filterBgColor="#00F" name="Shooter"/>
            <Filter filterBgColor="#020" name="Café"/>
        </ul>
    )
}