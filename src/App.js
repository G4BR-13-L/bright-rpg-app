import React from 'react';
import {SideBar} from './components/sideBar/SideBar';
import {Stories} from './components/stories/Stories';
import {Bright} from './components/bright/Bright';
import {About} from './components/about/About';
import {Sheet} from './components/sheet/Sheet';
import { Route, Switch } from 'react-router-dom';



function App() {
  return (
    <div className="App">
      

      <SideBar className="side"/>
      

      <Switch>
            <Route exact path='/canon' component={Stories}/>
            <Route path='/bright' component={Bright}/>
            <Route path='/sheet' component={Sheet}/>
            <Route path='/about' component={About}/>
      </Switch>
    </div>
      
    
  );
}

export default App;
