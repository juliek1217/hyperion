import React, { Component } from "react";
import { BrowserRouter, Switch } from "react-router-dom";
/** Layouts **/
import BasicLayout from "./layouts/BasicLayout";
import MainLayout from "./layouts/MainLayout";
/** Pages **/
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Insights from "./pages/Insights";
import Login from "./pages/Login";
import Products from "./pages/Products";
import Request from "./pages/Request";
import Signup from "./pages/Signup";
import Support from "./pages/Support";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <MainLayout exact path="/" component={Home} />
            <BasicLayout path="/login" component={Login} />
            <BasicLayout path="/signup" component={Signup} />
            <BasicLayout exact path="/dashboard" component={Dashboard} />
            <BasicLayout path="/products" component={Products} />
            <BasicLayout path="/insights" component={Insights} />
            <BasicLayout path="/support" component={Support} />
            <BasicLayout path="/request" component={Request} />
            <BasicLayout path="/about" component={About} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
