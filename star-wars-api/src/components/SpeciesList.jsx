export default function SpeciesList (props) {

    
    if(!props.species) {
        return <h1>Loading... please wait</h1>
    } else {
        return (
            <div className="objectList">
    
                {
                    props.species.map((species, index) => (
                        <div key={index} className="objectItem">
                            
                            <h2>Name: {species.name}</h2>
                            <h3>Classification: {species.classification}</h3>
                            <h3>Skin Colors: {species.skin_colors}</h3>
                        </div>    
                    ))
                }
    
            </div>
        )

    }

  }