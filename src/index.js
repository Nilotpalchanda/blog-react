import React,{ Component }from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './index.css';
import axios from 'axios'

import Home from './components/Home'
import About from './components/About'
import Services from './components/Services'
import Contact from './components/Contact'

import registerServiceWorker from './registerServiceWorker';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';

class App extends Component{
	render(){
		return(
			<Router>
				<Switch>
					<Route exact path="/" component={Home}/>
					<Route path="/about" component={About}/>
					<Route path="/services" component={Services}/>
					<Route path="/contact" component={Contact}/>
				</Switch>
			</Router>



			);
	}
}



ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
