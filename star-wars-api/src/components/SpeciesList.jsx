import { useState, useEffect } from 'react'

export default function SpeciesList (props) {

    const imageArray = [
        "url(https://static1.moviewebimages.com/wordpress/wp-content/uploads/article/TqB8eK4C8IIB837MIqJMSoiZ8CP1Dt.jpg)",
        "url(https://hasbropulse.com/cdn/shop/files/G0241_PROD_SW_BL_CUBE_030_2000px_300DPI_2000x.jpg?v=1711387547)",
        "url(https://lumiere-a.akamaihd.net/v1/images/wookiee-bio-1_541e8c87.jpeg)",
        "url(https://lumiere-a.akamaihd.net/v1/images/rodian-main_de29c78f.jpeg?region=0%2C0%2C1137%2C853)",
        "url(https://lumiere-a.akamaihd.net/v1/images/image_991736d0.jpeg?region=0%2C0%2C1560%2C878)",
        "url(https://www.cnet.com/a/img/resize/92f8649af165b96366a68c5b0ffccc25953a7203/hub/2019/11/19/2eddb56d-56a3-4569-874e-32cd61180d6a/babyyoda2.jpg?auto=webp&fit=crop&height=675&width=1200)",
        "url(https://pbs.twimg.com/media/EkZFceQWAAEZXIz.jpg)",
        "url(https://static1.srcdn.com/wordpress/wp-content/uploads/2020/11/The-Mandalorian-Mon-Calamari-Characters.jpg)",
        "url(https://screenrant.com/wp-content/uploads/2016/12/ewoks-star-wars-return-of-the-jedi.jpg)",
        "url(https://lumiere-a.akamaihd.net/v1/images/databank_sullustan_01_169_01e4c3e0.jpeg?region=0%2C0%2C1560%2C878)"
    ]

    // const initialImage = ''
    // const [backgroundImages, setBackgroundImages] = useState(initialImage);

    const initialImages = props.species.map(() => '');
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

    if(!props.species) {
        return <h1>Loading... please wait</h1>
    } else {
        return (
            <div className="objectList">
    
                {
                    props.species.map((species, index) => (
                        <div key={index} className="objectItem"
                        style={{backgroundImage: backgroundImages[index], backgroundSize:'500px' }} 
                        onMouseOver={() => addImage(index)} 
                        onMouseLeave={() => removeImage(index)}
                        >
                            
                            <h2>Name: {species.name}</h2>
                            <h3>Classification: {species.classification}</h3>
                            <h3>Skin Colors: {species.skin_colors}</h3>
                            <h3>Lifespan: {species.average_lifespan} years</h3>
                        </div>    
                    ))
                }
    
            </div>
        )

    }

  }