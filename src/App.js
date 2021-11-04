import './App.css';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Menu from './pages/Menu'
import About from './pages/About'
import Contact from './pages/Contact'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* the navbar is 'outside' of the routes, so it will appear on all
        of the pages/routes on this site */}
        <Navbar />
        {/* the switch is used to work with the separate routes or
        pages and the different components on each of them */}
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/menu" exact component={Menu} />
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />
        </Switch>
        {/* similarly, the footer will appear on each page */}
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;