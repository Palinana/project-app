import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Sidebar from './components/layout/SideBar';
import Dashboard from './components/dashboard/Dashboard';
import ProjectDetails from './components/projects/ProjectDetails';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import CreateProject from './components/projects/CreateProject';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Navbar />
                    <Switch>
                        <Route exact path="/" component={Dashboard}></Route>
                        <Route exact path="/project/:id" component={ProjectDetails}></Route>
                        <Route exact path="/sign-in" component={SignIn}></Route>
                        <Route exact path="/sign-up" component={SignUp}></Route>
                        <Route exact path="/create" component={CreateProject}></Route>
                    </Switch>
                </div>
            </BrowserRouter>  
        );
    }
}

export default App;

