export default function PlanetList (props) {

    
    if(!props.planets) {
        return <h1>Loading... please wait</h1>
    } else {
        return (
            <div className="objectList">
    
                {
                    props.planets.map((planet, index) => (
                        <div key={index} className="objectItem">
                            
                            <h2>Name: {planet.name}</h2>
                            <h3>Climate: {planet.climate}</h3>
                            <h3>Terrain: {planet.terrain}</h3>
                        </div>    
                    ))
                }
    
            </div>
        )

    }

  }