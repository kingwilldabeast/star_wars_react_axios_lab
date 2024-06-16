import { useState, useEffect } from 'react'

export default function PlanetList (props) {

    const imageArray = [
        "url(https://static1.srcdn.com/wordpress/wp-content/uploads/2021/05/Tatooine-Star-Wars.jpg)",
        "url(https://lumiere-a.akamaihd.net/v1/images/alderaan-main_f5b676cf.jpeg?region=0%2C0%2C1280%2C720)",
        "url(https://external-preview.redd.it/1OcJFCKRdBvi0lDLpA59n2bIgcsJIv_ZBnie20vquOE.jpg?auto=webp&s=2b9747048066cc4f29ba507d2575b5800b691a4c)",
        "url(https://static1.srcdn.com/wordpress/wp-content/uploads/2019/08/star-wars-empire-strikes-back-hoth-ion-canon-echo-base-Edited.jpg)",
        "url(https://lumiere-a.akamaihd.net/v1/images/Dagobah_890df592.jpeg?region=0%2C80%2C1260%2C630)",
        "url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8dbfd9e6-f858-45e7-a042-95aa86b75aba/dgrqdff-b13b43bf-5abd-4a25-937b-01a9f7e32f1d.jpg/v1/fill/w_1280,h_763,q_75,strp/star_war_planets___bespin_by_bogi380_dgrqdff-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzYzIiwicGF0aCI6IlwvZlwvOGRiZmQ5ZTYtZjg1OC00NWU3LWEwNDItOTVhYTg2Yjc1YWJhXC9kZ3JxZGZmLWIxM2I0M2JmLTVhYmQtNGEyNS05MzdiLTAxYTlmN2UzMmYxZC5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.VW5QnAIeYAujd7IGAbwLevUiUfWqxK_FfilKH8OE7dk)",
        "url(https://lumiere-a.akamaihd.net/v1/images/databank_endor_01_169_68ba9bdc.jpeg?region=0%2C0%2C1560%2C878)",
        "url(https://inhabitat.com/wp-content/blogs.dir/1/files/2015/12/Naboo-County-Civic-Center-889x591.jpg)",
        "url(https://static1.cbrimages.com/wordpress/wp-content/uploads/2017/02/Star-Wars-Coruscant.jpg)",
        "url(https://lumiere-a.akamaihd.net/v1/images/kamino-1-retina_e7dfa684.jpeg?region=0%2C0%2C1200%2C510)"
    ];

    // const colorArray = ["blue"]

    // const [image, updateImage] = useState(['','','','','','','','','',''])
    // const addImage = (index) => updateImage(imageArray[index])
    // const testImage = () => updateImage("https://static1.cbrimages.com/wordpress/wp-content/uploads/2018/12/r2d2.jpg")
    // const removeImage = () => updateImage()  

    const initialImages = props.planets.map(() => '');
    const [backgroundImages, setBackgroundImages] = useState(initialImages);
  
    const addImage = (index) => {
      const newImages = [...backgroundImages];
      newImages[index] = imageArray[index] // Update with the new image URL
      setBackgroundImages(newImages);
    };
  
    const removeImage = (index) => {
      const newImages = [...backgroundImages];
      newImages[index] = ''; // Revert to the default image URL
      setBackgroundImages(newImages);
    };
    
    if(!props.planets) {
        return <h1>Loading... please wait</h1>
    } else {
        return (
            <div className="objectList">
    
                {
                    props.planets.map((planet, index) => (
                        <div key={index} className="objectItem"     
                        style={{backgroundImage: backgroundImages[index], backgroundSize:'500px' }} 
                        onMouseOver={() => addImage(index)} 
                        // onMouseOver={testImage} 
                        onMouseLeave={() => removeImage(index)}
                        >
                            
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