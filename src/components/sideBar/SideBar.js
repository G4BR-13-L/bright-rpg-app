import React from 'react';
import './style.css';
import {  Link } from 'react-router-dom';
import {Icon} from '../icon/Icon';

export const SideBar = () =>{
	return(
		<div className="container">
			<div className="logo">BRIGHT</div>
			<div className="drawer">
				<ul className="side-bar-list">
		            <li className="side-bar-list-li"><Link className="sizePad" to='/canon'><Icon  size={30} iconName="books"/>Stories</Link></li>
		            <li className="side-bar-list-li"><Link className="sizePad" to='/bright'><Icon size={30} iconName="circuit"/>WeekCode</Link></li>
		            <li className="side-bar-list-li"><Link className="sizePad" to='/sheet'><Icon size={30} iconName="sheet"/>Sheet</Link></li>
		            
		         </ul>
		         
		         <span><Icon className="sizePad" size={45} iconName="bright"/><Link to='/about'>About</Link></span>
	         </div>
		</div>
	);
}

