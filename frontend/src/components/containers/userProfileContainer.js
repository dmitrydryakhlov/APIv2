import React from "react";
import { connect } from "react-redux";
import UserProfile from "../views/userProfile";
import * as userApi from "../../Api/userApi";

class UserProfileContainer extends React.Component{

    componentDidMount() {
        let userId = this.props.params.userId;
        userApi.getProfile(userId);
    }

    render() {
        return (
            <UserProfile {...this.props.profile} />
        );
    }

}

const mapStateToProps = function(store) {
    return {
        profile: store.userState.userProfile
    };
};

export default connect(mapStateToProps)(UserProfileContainer);
