import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import CartContextProvider from './Global/CartContext'
import Navbar from './components/Navbar';
import ProductsContextProvider from './Global/ProductsContext';
import Products from './components/Products';
import Cart from './components/Cart';
import NotFound from './components/NotFound';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <ProductsContextProvider>
        <CartContextProvider>
          <Router>
            <Navbar />
            <Switch>
              <Route path="/" exact component={Products} />
              <Route path="/cart" exact component={Cart} />
              <Route component={NotFound} />
            </Switch>
            <Footer />
          </Router>
        </CartContextProvider>
      </ProductsContextProvider>
    </div>
  );
}

export default App

