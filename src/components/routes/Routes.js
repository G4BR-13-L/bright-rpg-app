import React from 'react';
import { Router, Route, Redirect} from 'react-router-dom';
import { withRouter } from "react-router-dom";

// ficha, Sories, week, bright, you

import {Stories} from '../stories/Stories';
import {Bright} from '../bright/Bright';
//import /**/ from './..'
//import /**/ from './..'
//import /**/ from './..'
//import /**/ from './..'

export default props =>{
	<Router>
		<Route path='/stories' component={Stories}/>
		<Route path='/bright' component={Bright}/>
		<Redirect from="*" to="/stories"></Redirect>
	</Router>
}
