import React from 'react';
import './drawerStories.css';
import { Link } from 'react-router-dom';

export const DrawerStories = (props) =>{

	const alternate = props.whenClick;
	
	return(
		<div className="drawerStories">
			<ul className="drawer-stories-list">
				<li className="drawer-stories-list-li" id="canon_bottom" onLoad={_=>alternate(false)} onClick={_=>alternate(false)}>
					<Link  to='/canon'>Canon</Link>
				</li>
				<li className="drawer-stories-list-li" id="legend_bottom" onClick={_=>alternate(true)}>
					<Link  to='/legends'>Legends</Link>
				</li>
			</ul>
		</div>
);
}

