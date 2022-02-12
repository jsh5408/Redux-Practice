import {createStore} from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

const countModifier = (count = 0, action) => {
    console.log(count);
    if(action.type === "ADD") {
        return count + 1;
    } else if (action.type === "MINUS") {
        return count - 1;
    } else {
        return count;
    }
}
const countStore = createStore(countModifier);

countStore.dispatch({type: "ADD"});
countStore.dispatch({type: "ADD"});
countStore.dispatch({type: "ADD"});
countStore.dispatch({type: "ADD"});
countStore.dispatch({type: "MINUS"});

console.log(countStore.getState());



/*
let count = 0;
number.innerText = count;

const updateText = () => {
    number.innterText = count;
}

const handleAdd = () => {
    console.log("add");
    count = count + 1;
    updateText();
}

const handleMinus = () => {
    console.log("minus");
    count = count - 1;
    updateText();
}

add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);
*/