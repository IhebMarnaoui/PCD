import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Welcome from "./components/Welcome";
import Second from "./components/Second";
import Chart from "./components/Chart";
import Tab from "./components/Tab";
import Team from "./components/Team";
import Contact from "./components/Contact";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AboutUs from "./components/AboutUs";

function App() {
     return (
          <Router>
               <Header />
               <Switch>
                    <Route exact path="/">
                         <Welcome />
                         <Team />
                    </Route>
                    <Route path="/forecasts" component={Tab} />
                    <Route path="/charts/:id">
                         <Chart />
                    </Route>
                    <Contact />
               </Switch>
               <Contact />
               <Footer />
          </Router>
     );
}

export default App;
