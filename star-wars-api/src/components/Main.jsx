import {Route, Routes} from 'react-router-dom'
import Home from './Home'
import StarshipList from './StarshipList'
import FilmList from './FilmList'
import PeopleList from './PeopleList'
import PlanetList from './PlanetList'
import SpeciesList from './SpeciesList'
import VehicleList from './VehicleList'
import Bikini from './Bikini'

export default function Main (props) {
    // console.log(props)
    // const thing = ""
    return (
      
      <div className="main">
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/starships" element={<StarshipList starShips = {props.starShips}/>}/>
            <Route path="/films" element={<FilmList films = {props.films}/>}/>
            <Route path="/people" element={<PeopleList people = {props.people}/>}/>
            <Route path="/planets" element={<PlanetList planets = {props.planets}/>}/>
            <Route path="/species" element={<SpeciesList species = {props.species}/>}/>
            <Route path="/vehicles" element={<VehicleList vehicles = {props.vehicles}/>}/>
            <Route path="/bikini" element={<Bikini />}/>
        </Routes>
      </div>
    )
  }