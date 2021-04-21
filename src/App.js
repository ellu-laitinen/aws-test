import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link,
    Redirect,
  } from "react-router-dom";
import Department from './Department';
  import Layout from './Layout'


const Nav = () => {
    return (
          <Link to="/">home</Link>
    )
  
}

const App = () => {
    return (
    <Router>
        <Nav/>
        <Switch>
            <Route exact path="/">
           <Redirect to="/departments"/></Route>
            <Route  path="/departments" exact component={Layout}></Route>
           
       
           
        </Switch>
    </Router>
    );
}

export default App;
