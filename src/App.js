import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Products from './components/Products';

const Home = () => (
  <div>
    <h2>Home page</h2>
  </div>
  );

const Products = ({match}) => (
  <div>
    
            <ul>
                <li><Link to={`${match.url}/laptops`}>Laptops</Link></li>
                <li><Link to={`${match.url}/phones`}>Phones</Link></li>
                <li><Link to={`${match.url}/tvs`}>TVs</Link></li>
               
             </ul>
            <Route path = {`${match.url}/laptops`} component={Laptops} />
            <Route path = {`${match.url}/phones`} component={Phones} />
            <Route path = {`${match.url}/tvs`} component={TVs} />
  </div>
  );
const Laptops = () => (
  <div>
    Laptops
  </div>
  );
const Phones = () => (
  <div>
    Phones
  </div>
  );
const TVs = () => (
  <div>
    TVs
  </div>
  );
const Sales = () => (
  <div>
    <h2>Sales page</h2>
  </div>
  );
const About = () => (
  <div>
    <h2>About page</h2>
  </div>
  );
class App extends Component {
  render() {
    return (
      
      <Router>
       <div>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/products">Products</Link></li>
                <li><Link to="/sales">Sales</Link></li>
                <li><Link to="/about">About</Link></li>
                </ul>

                <Route exact path="/" component={Home} />
                <Route exact path="/products" component={Products} />
                <Route path="/sales" component={Sales} />
                <Route path="/about" component={About} />
                
         </div>

       </Router>
     
    );
  }
}

export default App;
