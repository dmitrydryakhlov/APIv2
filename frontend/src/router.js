import React from "react";
import { Router, Route } from "react-router-dom";
import IndexRoute from "react";
// Layouts
import MainLayout from "./components/layouts/mainLayout";
import SearchLayoutContainer from "./components/containers/searchLayoutContainer";

// Pages
import Home from "./components/home";
import UserListContainer from "./components/containers/userListContainer";
import UserProfileContainer from "./components/containers/userProfileContainer";
import WidgetListContainer from "./components/containers/widgetListContainer";

import createBrowserHistory from "history/createBrowserHistory";

const customHistory = createBrowserHistory();

class MyRouter extends React.Component {
    render(){
        return(
            <Router history={customHistory}>
                <Route component={MainLayout}>
                    <Route path="/" component={Home} />

                    <Route path="users">
                        <Route component={SearchLayoutContainer}>
                            <IndexRoute component={UserListContainer} />
                        </Route>
                        <Route path=":userId" component={UserProfileContainer} />
                    </Route>

                    <Route path="widgets">
                        <Route component={SearchLayoutContainer}>
                            <IndexRoute component={WidgetListContainer} />
                        </Route>
                    </Route>

                </Route>
            </Router>
        );}
}
export default MyRouter;