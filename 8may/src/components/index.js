import React from 'react'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'


import Login from './login'
import Signup from './signup'
import Home from './home'
import Library from './library'

const App=() => {

	return <div>
		<Router>
			<Switch>
				<Route exact path="/" component={Login} />
				<Route exact path="/Signup" component={Signup} />
				<Route exact path="/Home" component={Home} />
				<Route exact path="/Library" component={Library} />
			</Switch>
		</Router>
	</div>
}

export default App