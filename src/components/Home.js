import React, {useState, useEffect} from 'react';
import axios from 'axios';


import Carousel from 'react-bootstrap/Carousel';

function Home() {

    const [carousel, setcarousel] = useState({});

    const consultarAPISlider = async () => {
		const resultado = await axios('https://api.nasa.gov/planetary/apod?api_key=34ppr1hOR3Qw1rjZyoZ7GJrnrbmf5Igzvc2KuuYX&hd=true');

		console.log(resultado.data);
		// agregar el resultado de la Api al state; (similar a this.setState)
		setcarousel(resultado.data);
	}

    useEffect(() => {
            consultarAPISlider();
        },[]
    );
    


    return(
        <Carousel>
            
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={carousel.url}
                    alt={carousel.title}
                />
                <Carousel.Caption>
                    <h3>{carousel.title}</h3>
                    <p><small>{carousel.explanation}</small></p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default Home;