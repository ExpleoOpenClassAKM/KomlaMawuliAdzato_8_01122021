import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '../styles/App.css';
import Home from '../Pages/Home';
import Header from './Header';
import ApartmentPage from '../Pages/ApartmentPage'
import About from '../Pages/About'
import Error404 from './Error404'
import Footer from './Footer'
import { data } from '../datas/data';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
        <Header />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path="/apartment/:id" render={(props) => (
            <ApartmentPage {...props} apartments={data} />
            )}>
          </Route>
          <Route exact path='/About'>
            <About />
          </Route>
          <Route path='*'>
            <Error404 />
          </Route>
        </Switch>
        </div>
        <Footer />
      </Router>
    )
  }
}

export default App

