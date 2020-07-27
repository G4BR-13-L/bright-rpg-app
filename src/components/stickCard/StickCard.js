import React from 'react';
import './stickCard.css';
import bright from '../../assets/img/bright_ep1.png';
import earth from '../../assets/img/earth.png';
import morning_star from '../../assets/img/morning_star.png';
import power from '../../assets/img/power.png';
import naves from '../../assets/img/naves.jpg';
import rey from '../../assets/img/rey.jpg';


export const StickCard = (props) =>{
	function calling(imageName){
		switch(imageName){
			case 'bright':
				return(bright);
			break;	
			case 'morning_star':
				return(morning_star);
			break;	
			case 'power':
				return(power);
			break;	
			case 'earth':
				return(earth);
			break;	
			case 'naves':
				return(naves);
			break;	
			case 'rey':
				return(rey);
			break;
			default:
				return(bright)
			break;	

		}
	}


	return(
		<div className="stick-card" style={{ backgroundImage:`url(${calling(props.imageName)})` }}>
			{/*<div className="front-card-title">Titulo</div>*/}
			<div className="card-gradient"><h3 className="title-card">{props.title}</h3></div>
			{/*<div className="card-background">Background</div>*/}
		</div>
	);
}

