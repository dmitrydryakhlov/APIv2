//import {combineReducers} from "react";

/*
const initialUserState = {
    users: []
};

var userReducer = function(state = initialUserState, action) {
    switch(action.type){
    case "USER_LIST_SUCCESS":
        return Object.assign({}, state, {users:action.users});
    }
    //    if (action.type === "ADD_USER") {
    // Измененный редьюсер добавляет нового
    // пользователя и возвращает копию состояния
    //    let newState = state.concat([action.user]);
    // когда пользователь не добавляется, 
    // возвращается оригинальное состояние, а не копия.
    //   return newState;
    return state;
};
  
// The Widget Reducer
// Редьюсер устанавливает пустой массив в качестве начального состояния.
const widgetReducer = function(state = {}, action) {
    if (action.type === "ADD_WIDGET") {
        const newState = { ...state,  widget: action.widget};
        return newState;
    }
    // редьюсер всегда должен возвращать состояние.
    return state;
};

const reducers = combineReducers({
    // В каждый редьюсер теперь передается не все состояние,
    // как в примере с одним редьюсером, а соответствующий раздел. 
    // И возвращаемое состояние тоже относится к этому разделу.
    userState: userReducer,
    widgetState: widgetReducer,
    searchLayoutState: searchLayoutReducer
});

// Создание хранилища с передачей редьюсера
// Происходит вызов экшена с новым пользователем.
var store = Redux.createStore(reducers);
  
/* Отправка первого экшена, чтобы выразить намерение
 изменить состояние */

// Q: Какой редьюсер вызывается после dispatch?
// A: Каждый из них.
// Помните, что каждый редьюсер получает и передает только свою часть,
// а не целое состояние
//store.dispatch({
//    type: "ADD_USER",
//    user: {name: "Dan"}
//});

// Reducers

import { combineReducers } from "redux";
import {routerReducer} from "react-router-redux";
// Reducers
import userReducer from "./userReducer";
import widgetReducer from "./widgetReducer";
import searchLayoutReducer from "./searchLayoutReducer";

// Combine Reducers
var reducers = combineReducers({
    routing: routerReducer,
    userState: userReducer,
    widgetState: widgetReducer,
    searchLayoutState: searchLayoutReducer
});

export default reducers;
