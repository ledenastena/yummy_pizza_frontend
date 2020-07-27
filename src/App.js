import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Header from './components/header/header.component';
import HomePage from './pages/home/home.component';
import ProductsPage from './pages/products/products.component';

class App extends React.Component {
  render() {
    return(
      <div className='app-container'>
        <Header />
        <div className='app-page-content'>
          <Switch>
            <Route exact path='/products' component={ ProductsPage } />
            <Route path='/' component={ HomePage } />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;