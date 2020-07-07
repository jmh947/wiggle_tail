import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from './components/layout/Navbar';
import Dashboard from "./components/dashboard/Dashboard"
import PostDetails from './components/posts/PostDetails';
import SignUp from './components/auth/Signup';
import SignIn from './components/auth/Signin';
import CreatePost from './components/posts/CreatePost';


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
 </Switch>
  
    </div>

</BrowserRouter>
  );
}

export default App;
