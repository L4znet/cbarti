import logo from './images/logo.svg';
import user from './images/user.png';
import './App.css';
import Filters from "./components/Filters";
import Cards from "./components/Cards";
import Searchbar from "./components/Searchbar";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Random from "./pages/Random";
import {Route, Routes} from "react-router-dom";
import NewPost from "./pages/NewPost";


export default function App() {
  return (
      <Routes>
          <Route path="/" element={ <Home/> } />
          <Route path="/random" element={ <Random/> } />
          <Route path="/new" element={ <NewPost/> } />
      </Routes>
  )
}