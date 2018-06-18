import React from "react";
import { connect } from "react-redux";
import UserList from "../views/UserList";
import * as userApi from "../../Api/userApi";
import store from "../../store/store";
import { loadSearchLayout } from "../../actions/searchLayoutActions";

class UserListContainer extends React.Component{

    componentDidMount() {
        userApi.getUsers();
        store.dispatch(loadSearchLayout("users", "User Results"));
    }

    render() {
        return (
            <UserList users={this.props.users} deleteUser={userApi.deleteUser} />
        );
    }

}

const mapStateToProps = function(store) {
    return {
        users: store.userState.users
    };
};

export default connect(mapStateToProps)(UserListContainer);

//2 вариант
/*import React from "react";
import { connect } from "react-redux";
import UserList from "";

const mapStateToProps = function(store) {
    return {
        users: store.userState.users
    };
};

export default connect(mapStateToProps)(UserList);
*/
// где компонент-контейнер? И почему мы не использовали React.createClass()?

// Оказывается, функция connect() создает для нас компонент.
// Обратите внимание, что на этот раз мы передаем ей компонент-представление
// напрямую. Компоненты-контейнеры существуют только для того,
// чтобы позволить компоненту-представлению сосредоточиться на отображении,
// они передают свое состояние в компонент-представление.
// И функция connect() именно это и делает. Она передает состояние
// (в виде свойств) в компонент-представление и фактически возвращает
// новый компонент-обертку.
// В сущности, эта обертка и представляет собой компонент-контейнер.