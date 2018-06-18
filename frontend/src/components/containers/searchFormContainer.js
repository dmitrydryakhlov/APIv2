import React from "react";
import * as userApi from "../../Api/userApi";
import * as widgetApi from "../../Api/widgetApi";
import { loadSearchLayout } from "../../actions/searchLayoutActions";
import SearchForm from "../views/searchForm";

class SearchFormContainer extends React.Component{

    search(event) {
        event.preventDefault();

        // By assigning a "child" ref to <SearchForm />, we
        // can use that reference to gain access to the
        // .getQuery() method. See the code for
        // <SearchForm /> to see how it returns a value.
        let query = this.refs.child.getQuery();

        if (this.props.searchType === "users") {
            userApi.searchUsers(query);
        } else if (this.props.searchType === "widgets") {
            widgetApi.searchWidgets(query);
        }
    }
    render() {
        return (
            <SearchForm search={this.search} ref="child" />
        );
    }

}

export default SearchFormContainer;
