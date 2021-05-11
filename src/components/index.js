import React from 'react'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'


import Login from './login'
import Signup from './signup'
import Home from './home'
import Library from './library'
import Tutorial from './tutorial'
import Upload from './upload'

const App=() => {

	return <div>
		<Router>

			<Switch>
				<Route exact path="/" component={Login} />
				<Route exact path="/Signup" component={Signup} />
				<Route exact path="/Home" component={Home} />
				<Route exact path="/Library" component={Library} />
				<Route exact path="/Tutorial" component={Tutorial} />
				<Route exact path="/Upload" component={Upload} />
			</Switch>
		</Router>
	</div>
}

export default App