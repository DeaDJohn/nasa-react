import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Image from 'react-bootstrap/Image';



function PicDay () {

    const [carousel, setcarousel] = useState({});
    const [date, setdate] = useState('');

    
    const diaAnterior = () => {
        var randomDay;
        var dd = (Math.floor(Math.random() * 30) + 1);
        dd = ("0" + dd).slice(-2);
        var mm =  Math.floor(Math.random() * 12) + 1;
        mm = ("0" + mm).slice(-2);
        var yyyy = '2019';
        randomDay = yyyy + '-' + mm + '-' + dd  ;
        setdate(randomDay);
        console.log(date);
        consultarAPISlider();
    }
    const consultarAPISlider = async () => {
        console.log(date);
        if(date === ''){
            var today = new Date();
            var dd = String(today.getDate()).padStart(2, '0');
            var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
            var yyyy = today.getFullYear();
            
            today = yyyy + '-' + mm + '-' + dd  ;
            setdate(today);
            console.log(today);
        }
		const resultado = await axios(`https://api.nasa.gov/planetary/apod?api_key=34ppr1hOR3Qw1rjZyoZ7GJrnrbmf5Igzvc2KuuYX&hd=true&date=${date}`);

		console.log(resultado.data);
		// agregar el resultado de la Api al state; (similar a this.setState)
		setcarousel(resultado.data);
	}

    useEffect(() => {
            consultarAPISlider();
        },[]
    );

    return (
        <div className="container">
            <div className="row">
            <button
				onClick={diaAnterior}
			    >Random</button>
            </div>
            <div className="row">
                <Image key={carousel.date} src={carousel.url} fluid />
            </div>
        </div>
    )
}

export default PicDay;