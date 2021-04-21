import 'materialize-css';
import {  BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Sidebar from "./components/sidebar"
import Home from "./components/home"
function App() {
  return (
    <div>
      <Sidebar />
      <Router>
      <Switch>
          <Route exact path="/">
           <Home />
          </Route>
        </Switch>
      </Router>
   </div>
  );
}

export default App;
