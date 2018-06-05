import Redux from "redux";
import combineReducers from "redux";

var userReducer = function(state = [], action) {
    if (action.type === "ADD_USER") {
        let newState = state.concat([action.user]);
        return newState;
    }
    return state;
};
  
// The Widget Reducer
const widgetReducer = function(state = {}, action) {
    if (action.type === "ADD_WIDGET") {
        const newState = { ...state,  widget: action.widget};
        return newState;
    }
    return state;
};

const reducers = combineReducers({
    userState: userReducer,
    widgetState: widgetReducer
});

// Создание хранилища с передачей редьюсера
var store = Redux.createStore(reducers);
  
/* Отправка первого экшена, чтобы выразить намерение изменить состояние */
store.dispatch({
    type: "ADD_USER",
    user: {name: "Dan"}
});