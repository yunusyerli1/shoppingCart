import React from 'react';
import Products from './components/Products';
import Filter from './components/Filter';
import Cart from './components/Cart';
import Header from './components/Header';
import Footer from './components/Footer';



class App extends React.Component {

  render(){
  return (
    
    <div className="grid-container">
      <header>
          <Header/>
      </header>
      
      <main>
        <div className="content">
          <div className="main">
            <Filter />
            <Products />
          </div>
          <div className="sidebar">
            <Cart />
          </div>
        </div>
      </main>
      
      <footer>
          <Footer/>
      </footer>
       
    </div>
    
  );
}
}
export default App;
