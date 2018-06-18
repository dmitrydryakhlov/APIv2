import React from "react";
import { connect } from "react-redux";
import WidgetList from "../views/widgetList";
import * as widgetApi from "../../Api/widgetApi";
import store from "../../store/store";
import { loadSearchLayout } from "../../actions/searchLayoutActions";

class WidgetListContainer extends React.Component{

    componentDidMount() {
        widgetApi.getWidgets();
        store.dispatch(loadSearchLayout("widgets", "Widget Results"));
    }

    render() {
        return (
            <WidgetList widgets={this.props.widgets} deleteWidget={widgetApi.deleteWidget} />
        );
    }

}

const mapStateToProps = function(store) {
    return {
        widgets: store.widgetState.widgets
    };
};

export default connect(mapStateToProps)(WidgetListContainer);
