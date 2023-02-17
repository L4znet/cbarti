import logo from '../images/logo.svg';
import Filters from "../components/Filters";
import Cards from "../components/Cards";
import Searchbar from "../components/Searchbar";
import Navbar from "../components/Navbar";


export default function Home() {
    return (
        <section className="wrapper">
            <header>
                <a href="" class="logo"><img src={logo} alt="Le logo du site"/></a>
                <Navbar/>
            </header>
            <Searchbar/>
            <Filters/>
            <Cards/>
        </section>
    )
}