
import './App.css';

import React, { Component } from 'react';
import Header from './components/Header';
import Products from './components/Products';
import Message from './components/Message';
import Cart from './components/Cart';
import Footer from './components/Footer';
import ProductContainer from './containers/ProductContainer';
import CartContainer from './containers/CartContainer';
import MessContainer from './containers/MessContainer';

class App extends Component {
  render() {
    return (
      <div>
        {/* <!-- Header --> */}
        <Header></Header>
        <main id="mainContainer">
            <div className="container">
                {/* <!-- Products --> */}
                <ProductContainer></ProductContainer>
                {/* <!-- Message --> */}
               <MessContainer></MessContainer>
                {/* <!-- Cart --> */}
                <CartContainer/>
            </div>
        </main>
        {/* <!-- Footer --> */}
        <Footer></Footer>
      </div>
    );
  }
}

export default App;

