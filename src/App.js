import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import Navbar from './components/Navbar';
import Navbar from './components/Header';
import About from './pages/About';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Insights from './pages/Insights';
import Login from './pages/Login';
import Products from './pages/Products';
import Request from './pages/Request';
import Signup from './pages/Signup';
import Support from './pages/Support';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/login" component={Login}/>
          <Route path="/signup" component={Signup}/>
          <Route exact path="/dashboard" component={Dashboard}/>
          <Route path="/products" component={Products}/>
          <Route path="/insights" component={Insights}/>
          <Route path="/support" component={Support}/>
          <Route path="/request" component={Request}/>
          <Route path="/about" component={About}/>
          
        </Switch>
      </div>
      </BrowserRouter>
    );
  }
}
export default App;
