import React from 'react';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import thunk from 'redux-thunk';
import reducers from './reducers';

/* components */
import Menu from './components/Menu';

/* routes */
import Home from './routes/Home/Home';
import About from './routes/About/About';
import Visit from './routes/Visit/Visit';
import NoMatch from './routes/NoMatch';

/* Define store */
const store = createStore(combineReducers({...reducers}), {}, applyMiddleware(thunk));

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <div>
                        <Menu />
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
