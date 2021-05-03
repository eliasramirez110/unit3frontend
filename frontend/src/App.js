import React from 'react';
import Sneaker from './components/Sneaker';
import data from './data';
import {Route} from 'react-router-dom';
import Store from './pages/Store'
function App() {
  return (
    <div>
       
        <div className="row">
          <a className="brand" href="/store">
            sneakerStore
          </a>
        </div>
        <div>
          <a href="/cart">Cart</a>
          <a href="/signin">Sign In</a>
        </div>
  
        <Route exact path = '/store' render = {()=><Store/>
        }/>
    </div>
  );
}

export default App;