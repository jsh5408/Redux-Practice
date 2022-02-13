import {createStore} from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

number.innerText = 0;

const ADD = "ADD";
const MINUS = "MINUS";

const countModifier = (count = 0, action) => {
    //console.log(count);
    switch(action.type) {
        case ADD:
            return count + 1;
        case MINUS:
            return count - 1;
        default:
            return count;
    }
}
const countStore = createStore(countModifier);

const onChange = () => {
    //console.log("change");
    number.innerText = countStore(countModifier);
}

countStore.subscribe(onChange);

const handleAdd = () => {
    countStore.dispatch({type: "ADD"});
}

const handleMinus = () => {
    countStore.dispatch({type: "MINUS"});
}

add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);



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

/*
if(action.type === "ADD") {
        return count + 1;
    } else if (action.type === "MINUS") {
        return count - 1;
    } else {
        return count;
    }
*/