import React from "react";
import axios from "axios";
import store from "../path/to/store";
import { connect } from "react-redux";
import UserList from "../components/NewLevelTutor/UserList";

const UserListContainer = React.createClass({
   
    //По причинам из пункта 3 нам больше не нужна функция getInitialState().
    //getInitialState: function() {
    //    return {
    //      users: []
    //    };
    //  },

    componentDidMount: function() {
        // Этот компонент делает ajax-запрос и обновляет свое локальное состояние.
        // Но если в других частях приложения появится зависимость 
        // от списка пользователя, этого будет недостаточно.
        axios.get("/path/to/user-api").then(response => {
            // this.setState({users: response.data});
            // Используя Redux, мы можем отправить экшен, когда вернется ajax-запрос,
            // вместо того, чтобы вызвать this.setState().
            
            // Этот и другие компоненты смогут подписаться на изменения состояния
            // Ajax-запрос теперь посылает экшен, вместо обновления локального состояния компонента.
            store.dispatch({
                type: "USER_LIST_SUCCESS",
                users: response.data
            });
        });
    },

    render: function() {
        // мы ссылаемся на this.props.users вместо this.state.users,
        // поскольку теперь массив users — это свойство, а не лок состояние компонента.
        return <UserList users={this.props.users} />;
    },
});

const mapStateToProps = function(store) {
    return {
        // хранилище имеет свойство userState. Но откуда это название?
        // Это название появляется при комбинировании редьюсеров:
        users: store.userState.users
    };
};
// react-redux помогает еще и в тех случаях, когда экшен нужно вызвать из события:
const mapDispatchToProps = function(dispatch, ownProps) {
    return {
        toggleActive: function() {
            dispatch({/*some actionst*/});
        }
    };
};


// круглые скобки connect()() - это два вызова функции.
// Первый вызов connect с одним параметром возвращает новую функцию.
// Ее можно было бы сохранить в переменную и вызвать,
// а можно просто вызвать, добавив круглые скобки.
// Во вторую функцию необходимо передать компонент React.
// В данном случае, это наш компонент-контейнер.
// Такие вызовы являются общей практикой парадигмы функционального программирования,
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserListContainer);

// Первый аргумент функции connect() — это функция,
// которая должна возвращать объект. Поля этого объекта станут свойствами компонента.
// Их значения берутся из состояния. Этот отражает и название функции «mapStateToProps».

// mapStateToProps() в качестве параметра получает все хранилище Redux.
// Основная цель функции mapStateToProps() — изолировать ту часть общего состояния,
// которая нужна компоненту, в виде свойств.