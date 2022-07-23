import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Header from "./components/Header"
import Nav from "./components/Nav"
import Footer from "./components/Footer"
import About from "./components/About"
import Vocation from "./components/Vocation"
import Contact from "./components/Contact"

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route exact path="/" component={Header} />
          <Route exact path="/about" component={About} />
          <Route exact path="/vocation" component={Vocation} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
