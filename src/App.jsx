import React from "react"
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'
import Home from './components/home/Home'


function App() {

  return (
    <div className="App">
     
     <Router>
            <Switch>
                <Route component={Home}/>
            </Switch>
        </Router>
     
    </div>
  )
}

export default App
