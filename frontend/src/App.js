import React, {useState} from 'react';
import Sneaker from './components/Sneaker';
import data from './data';
import {BrowserRouter, Route} from 'react-router-dom';
import Store from './pages/Store'
import Product from './pages/Product';
import Signin from './pages/Signin'
import Signup from './pages/Signup'


function App() {
  const adminUser = {
    email: "admin@admin.com",
    password: "admin123"
  }

  const [user, setUser] = useState(null);



  return (
     <div>
        <div className="row">
          <a className="brand" href="/store">
            sneakerStore
          </a>
          <a href="/cart">Cart</a>
          <a href="/signin">Sign In</a>
        </div>
      
          
         
        <Route exact path = '/signup' render = {()=><Signup/>}/>
        <Route exact path = '/signin' render = {()=><Signin/>}/>
        <Route path="/product/:id" component={Product}></Route>
        <Route exact path = '/store' render = {()=><Store/>
        }/>
    </div>
    
    
  );
}

export default App;