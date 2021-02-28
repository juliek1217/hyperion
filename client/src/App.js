// import React, { Component } from 'react';

// class App extends Component {
//   state = {
//     app: []
//   };
// /* 
//    This is where the magic happens
// */
//   async componentDidMount() {
//     try {
//       const res = await fetch('http://127.0.0.1:8000/api/'); // fetching the data from api, before the page loaded
//       const app = await res.json();
//       this.setState({
//         app
//       });
//     } catch (e) {
//       console.log(e);
//     }
//   }

//   render() {
//     return (
//       <div><p>hello world</p>
//         {this.state.app.map(item => (
//           <div key={item.id}>
//             <h1>{item.title}</h1>
//             <span>{item.description}</span>
//           </div>
//         ))}
//       </div>
//     );
//   }
// }

// export default App;




import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './pages/About';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Login from './pages/Login';
import Products from './pages/Products';
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
          <Route path="/support" component={Support}/>
          <Route path="/about" component={About}/>
          
        </Switch>
      </div>
      </BrowserRouter>
    );
  }
}
export default App;
