import { Link } from 'react-router-dom'

export default function Nav (props) {
    // console.log(props)
    // const thing = ""
    return (
      
      <div className="nav">
            <Link to="/" ><h2 className="navtext">Home</h2></Link>
            <Link to="/starships"><h2 className="navtext">Starships</h2></Link>
            <Link to="/films"><h2 className="navtext">Films</h2></Link>
            <Link to="/people"><h2 className="navtext">People</h2></Link>
            <Link to="/planets"><h2 className="navtext">Planets</h2></Link>
            <Link to="/species"><h2 className="navtext">Species</h2></Link>
            <Link to="/vehicles"><h2 className="navtext">vehicles</h2></Link>
        </div>
    )
  }