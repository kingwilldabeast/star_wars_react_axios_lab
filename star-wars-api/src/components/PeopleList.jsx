export default function PeopleList (props) {

    
    if(!props.people) {
        return <h1>Loading... please wait</h1>
    } else {
        return (
            <div className="objectList">
    
                {
                    props.people.map((person, index) => (
                        <div key={index} className="objectItem">
                            
                            <h2>Name: {person.name}</h2>
                            <h3>Gender: {person.gender}</h3>
                        </div>    
                    ))
                }
    
            </div>
        )

    }

  }