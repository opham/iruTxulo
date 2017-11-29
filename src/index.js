import React from 'react';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import reducers from './reducers';

/* routes */
import Home from './routes/Home';
import About from './routes/About';
import Visit from './routes/Visit';
import NoMatch from './routes/NoMatch';

/* Define store */
const store = createStore(combineReducers({...reducers}));

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <div>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/visit">Visit</Link></li>
                        </ul>
                        <hr />
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route path="/about" component={About} />
                            <Route path="/visit" component={Visit} />
                            <Route component={NoMatch} />
                        </Switch>
                    </div>
                </Router>
            </Provider>
        );
    }
}
