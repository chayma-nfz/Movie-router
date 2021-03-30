
import MovieApp from './Components/MovieApp';
import './App.css';
import MyNavbar from './Components/Navbar';
import { Route, Switch } from 'react-router-dom'
import Home from './Components/Home'
import Description from './Components/Description';


function App() {
  return (

<div>

    <MyNavbar/>
    <div className="App">
       
    
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/MovieApp" component={MovieApp} />
        <Route path="/MovieApp/:id" component={Description} />
    </Switch>
    </div>
    </div>
  );
}

export default App;
