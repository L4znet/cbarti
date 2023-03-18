import Button from "./Button";



export default function Searchbar() {

    const launchStart = () => {

    }

    return (
        <>
            <div className="searchbar">
                <input type="text" placeholder="Rechercher..."/>
                <Button method={launchStart} text="" icon="fa-sharp fa-solid fa-search"/>
            </div>
        </>
    )
}