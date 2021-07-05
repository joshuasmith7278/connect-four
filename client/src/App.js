import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from './components/navBar/NavBar';
import Home from './pages/Home';
import HelpPage from './pages/HelpPage';
import LoginPage from './pages/LoginPage';

function App() {
  
  return (
    <Router>
      <div className="App">
        <NavBar/>
        
        <div className="content">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/Help" component={HelpPage} />
            <Route path="/Login" component={LoginPage} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
