import React from 'react';
import './stories.css';
import {Canon} from './canon/Canon'
import {Legends} from './legends/Legends'
import {DrawerStories} from './drawerStories/DrawerStories'
import { BrowserRouter, Route, Switch } from 'react-router-dom';


export const Stories = () =>{

	function borderChanger(whoHaveBorder){
		if(whoHaveBorder){
			const _legend = document.querySelector('li#legend_bottom');
			const _canon = document.querySelector('li#canon_bottom');

			_legend.style.borderBottom ="10px solid #bb0a21";
			_canon.style.borderBottom="none";
			console.log('Legend fica verde')

		}else{
			const _legend = document.querySelector('li#legend_bottom');
			const _canon = document.querySelector('li#canon_bottom');

			_canon.style.borderBottom ="10px solid #bb0a21";
			_legend.style.borderBottom="none";
			console.log('Canon fica verde')
		}

	}
	return(
		<div className="stories" >
			<BrowserRouter >
				<DrawerStories className="topBar" whenClick={borderChanger}/>
				<Switch>
		            <Route exact path='/canon' component={Canon}/>
		            <Route  path='/legends' component={Legends}/>
	      		</Switch>
			</BrowserRouter>
		</div>
	);
}

