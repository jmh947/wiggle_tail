import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from './components/layout/Navbar';
import Dashboard from "./components/dashboard/Dashboard"
import PostDetails from './components/posts/PostDetails';
import SignUp from './components/auth/Signup';
import SignIn from './components/auth/Signin';
import CreatePost from './components/posts/CreatePost';

import petFinder1 from './components/petFinder/petFinder';

import SearchSitter from './components/Sitter/SearchSitter'
import SitterForm from "./components/Sitter/SitterForm"
import Footer from "./components/Footer"



function App() {
  return (
   <BrowserRouter>
    <div className="App">
    <NavBar/>
 <Switch>
   <Route exact path='/' component={Dashboard} />
   <Route path='/post/:id' component={PostDetails} />
   <Route path='/signin' component={SignIn} />
   <Route path='/signup' component={SignUp} />
   <Route path='/createpost' component={CreatePost} />
   <Route path='/petfinder1' component={petFinder1} />

   <Route path='/searchsitter' component ={SearchSitter } />
   <Route path='/sittersignup' component ={SitterForm} />
 </Switch>

    <Footer/>
  
    </div>

</BrowserRouter>
  );
}

export default App;
