import React from 'react';
import { 
  Route,
  Switch, 
  Redirect, 
} from 'react-router-dom';

import Home from './components/Page/Home';
import Industries from './components/Page/Industries';
import Services from './components/Page/Services';
import AboutUs from './components/Page/AboutUs';
import NavigationBar from './components/Navigation/NavigationBar/NavigationBar';
import './App.css';

function App() {
  const routes = (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/industries" component={Industries} />
      <Route path="/services" component={Services} />
      <Route path="/about-us" component={AboutUs} />
      <Redirect to="/" />
    </Switch>
  );
  return (
    <div>
      <NavigationBar />
      {routes}
    </div>
  );
}

export default App;
