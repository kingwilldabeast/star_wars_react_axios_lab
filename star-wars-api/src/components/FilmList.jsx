export default function FilmList (props) {

    
    if(!props.films) {
        return <h1>Loading... please wait</h1>
    } else {
        return (
            <div className="objectList">
    
                {
                    props.films.map((film, index) => (
                        <div key={index} className="objectItem">
                            
                            <h2>Episode {film.episode_id}: {film.title}</h2>
                            <h3>Released: {film.release_date}</h3>
                            <h3>{film.opening_crawl}</h3>
                        </div>    
                    ))
                }
    
            </div>
        )

    }

  }