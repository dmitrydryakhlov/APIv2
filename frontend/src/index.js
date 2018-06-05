import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router} from "react-router-dom";
import {Route} from "react-router-dom";
import MainLayout from "./components/NewLevelTutor/MainLayout";
import UserList from "./components/NewLevelTutor/UserList";
import WidgetList from "./components/NewLevelTutor/WidgetList";

ReactDOM.render(
    <Router>
        <MainLayout>
            <Route path = "/users" component = { UserList }/>
            <Route path = "/widgets" component = { WidgetList }/>
        </MainLayout>
    </Router>,
    
    document.getElementById("root"));
