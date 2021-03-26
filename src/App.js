import React from 'react';
import { 
  Route,
  Switch, 
  Redirect, 
} from 'react-router-dom';

import Page from './components/Page/Page';
import NavigationBar from './components/Navigation/NavigationBar/NavigationBar';
import { data, home } from './data/data';
import MainBar from './components/Header/MainBar'; 
import './App.css';

const { pages } = data;

const Home = () => <Page info={home} />;
const Industries = () => <Page info={pages[0]} />;
const Services = () => <Page info={pages[1]} />;
const AboutUs = () => <Page info={pages[2]} />;

const App = () => {
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
    <div className="main">
      <header>
        <MainBar />
        <NavigationBar />
      </header>
      {routes}
    </div>
  );
}

export default App;
