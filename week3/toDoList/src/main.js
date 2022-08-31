import TodoList from "./TodoList.js";

const data = [
    {
        text: "부들부들한 극세사 담요를 두르고 앉아있기",
    },
    {
        text: "와인이나 따뜻한 차 천천히 마시기",
    },
    {
        text: "클라이밍 같이 패배없는 스포츠 하기",
    },
];

const appElement = document.getElementById("app");

new TodoList({ target: appElement, initialState: data });
