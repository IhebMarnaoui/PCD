import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";
import Chart from "./components/Chart";
import Tab from "./components/Tab";
import Home from "./components/Home";
import Auth from "./components/Auth";
import SignUp from "./components/SignUp"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
     return (
          <Router>
               <Switch>
               <Route exact path="/" component={Auth} /> 
               <Route path="/signup" component={SignUp} />
               <Route path="/Home" component={Home} />
               <Route path="/forecasts" component={Tab} />
               <Route path="/charts/:id" component={Chart} />
               </Switch>
               <Footer />
          </Router>
     );
}

export default App;
