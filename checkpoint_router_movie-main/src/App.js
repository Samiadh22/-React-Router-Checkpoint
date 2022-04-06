
import './App.css';
import Movie from './components/Movie'
import NavBar from './components/NavBar'
import {Route,Switch} from 'react-router-dom'
import {Movies} from './components/Data'
import Details from './components/Details'
function App() {
  return (
    <div className="App">
     <NavBar />

     
    <Switch>
      <Route exact path='/' component={Movie}/>
      <Route path='/Details/:id' render={(props)=> <Details {...props} List={Movies}/>}/>
    </Switch>
    </div>
  );
}

export default App;
