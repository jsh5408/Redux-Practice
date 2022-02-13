import {createStore} from "redux";

const ADD = "ADD";
const DELETE = "DELETE";

const addToDo = (text) => {
    return {
        type: ADD,
        text
    };
}

const deleteToDo = (id) => {
    return {
        type: DELETE,
        id
    };
}

const saveLocalStorage = (toDos) => {
    localStorage.setItem("toDos", JSON.stringify(toDos));
    return toDos;
}

const reducer = (state = [], action) => {
    const checkStorage = localStorage.getItem("toDos");
    if(checkStorage !== null) {
        state = JSON.parse(checkStorage);
    }
    switch(action.type) {
        case ADD:
            const toDos = [{text: action.text, id: Date.now()}, ...state];
            return saveLocalStorage(toDos);
        case DELETE:
            const delToDo = state.filter(toDo => toDo.id !== action.id);
            saveLocalStorage(delToDo);
            return delToDo;
        default:
            return state;
    }
}

const store = createStore(reducer);

export const actionCreators = {
    addToDo,
    deleteToDo
};

export default store;