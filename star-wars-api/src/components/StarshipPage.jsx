import { useEffect, useState } from 'react'
import {useParams, Link} from 'react-router-dom'

export default function StarshipPage (props) {

  const [starship, setStarship] = useState('')

  let {starshipID} = useParams() 

  useEffect(() => {
    setStarship(props.starShips[starshipID])
  }, [props.starShips, starshipID])

  return starship ? (
    <div className="expandedItem">
        <br/>
      <Link to ='/starships' className='navtext'>Back to Starships</Link>
        <h2>Name: {starship.name}</h2>
        <h3>Capacity: {starship.cargo_capacity}</h3>
        <h3>Cost: {starship.cost_in_credits} <span className="symbol">$</span></h3>
        <h3>Length: {starship.length}</h3>
        <h3>Passengers: {starship.passengers}</h3>

    </div>
  ) 
  :     <div> 
            <div className='home'>  
            <h2>Starship not found</h2>
            <Link to ='/starships' className='navtext'>Back to Starships</Link>
            </div> 
        </div>
}

