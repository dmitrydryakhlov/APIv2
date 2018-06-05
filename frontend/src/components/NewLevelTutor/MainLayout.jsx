import React from "react";
import { Link } from "react-router-dom";

class MainLayout extends React.Component {
    render() {
        return (
            <div className="app">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/users">Users</Link></li>
                    <li><Link to="/widgets">Widgets</Link></li>
                </ul>
            </div>
        );
    }
}
  
export default MainLayout;