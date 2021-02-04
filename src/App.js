import './App.css';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './components/Pages/Home';
import Roster from './components/Pages/Roster';
import Schedule from './components/Pages/Schedule';
import Admin from './components/Pages/Admin'


function App() {
  return (

    <Router>
      <div className="App">
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/roster' component={Roster} />
          <Route path='/calendrier' component={Schedule} />
          <Route path='/admin' component={Admin} />
        </Switch>
      </div>
    </Router>

  );
}

export default App;
