import React from 'react'
import App from '../components'
import store from  './store'
import {Provider} from 'react-redux'
/*
@ creating store for entire app
*/

const Main=props=><Provider store={store}><App/></Provider>
export default Main