import './App.css';
import './assets/app.scss'
import * as _ from 'lodash'

import {
  Route,Switch,
  BrowserRouter as Router
  
} from "react-router-dom";
import { routes } from './routes';

function App() {
  
  return (
    _.map(routes, (route, index) => {

      return (
          <Router>
            <Switch>
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={route.components}
              />
            </Switch>
          </Router>
      )
    })
  )
}

export default App;
