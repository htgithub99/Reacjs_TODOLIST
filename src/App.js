import './App.css';
import './assets/app.scss'
import * as _ from 'lodash'

import {
  Route,Switch,
  BrowserRouter as Router
  
} from "react-router-dom";
import { routes } from './routes';
import { StoreProvider } from './store/StoreContext';

function App() {
  
  return (
    _.map(routes, (route, index) => {

      return (
        <StoreProvider>
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
        </StoreProvider>
      )
    })
  )
}

export default App;
