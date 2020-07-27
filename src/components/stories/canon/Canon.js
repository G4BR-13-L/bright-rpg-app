import React from 'react';
import './canon.css';
import {StickCard} from '../../stickCard/StickCard';


export const Canon = () =>{
	return(
		<div className="Canon">
			<StickCard title="Episódio I" imageName="bright"/>
			<StickCard title="Episódio II" imageName="morning_star"/>
			<StickCard title="Episódio III" imageName="power"/>
			<StickCard title="Episódio IV" imageName="earth"/>
			<StickCard title="Episódio V" imageName="naves"/>
			<StickCard title="Episódio VI" imageName="rey"/>
		</div>
	);
}

