import './App.css';
import Header from './components/header';
import About from './components/about';
import Todo from './components/todo';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  return (
    <>
      <Router>
      <Header title = "Todo App" />
        <Switch>
          <Route exact path = '/' render = {() => 
            {return(
              <Todo />
            )}
          }
          ></Route>

          <Route exact path = '/about' render = {About}></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
