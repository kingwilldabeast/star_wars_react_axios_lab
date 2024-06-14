export default function FilmList (props) {

    
    if(!props.films) {
        return <h1>Loading... please wait</h1>
    } else {
        return (
            <div className="objectList">
    
                {
                    props.films.map((film, index) => (
                        <div key={index} className="objectItem">
                            
                            <h2>Title: {film.title}</h2>
                            <h3>Episode: {film.episode_id}</h3>
                            <h3>Released: {film.release_date}</h3>
                            <h3>Summary: {film.opening_crawl}</h3>
                        </div>    
                    ))
                }
    
            </div>
        )

    }

  }