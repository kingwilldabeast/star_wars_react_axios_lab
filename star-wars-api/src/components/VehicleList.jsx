export default function VehicleList (props) {

    
    if(!props.vehicles) {
        return <h1>Loading... please wait</h1>
    } else {
        return (
            <div className="objectList">
    
                {
                    props.vehicles.map((vehicle, index) => (
                        <div key={index} className="objectItem">
                            
                            <h2>Name: {vehicle.name}</h2>
                            <h3>Capacity: {vehicle.cargo_capacity}</h3>
                            <h3>Cost: {vehicle.cost_in_credits} <span className="symbol">$</span></h3>
                            <h3>Length: {vehicle.length}</h3>
                            <h3>Passengers: {vehicle.passengers}</h3>
                        </div>    
                    ))
                }
    
            </div>
        )

    }

  }