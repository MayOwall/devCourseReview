function TodoList(params) {
  const todoListElement = document.createElement("div");
  const targetElement = params.taget;

  targetElement.appendChild(todoListElement);

  this.state = params.intialState;

  this.render = () => {
    todoListElement.innerHTML = `
        <ul>
            ${this.state.map((todo) => `<li>${todo.text}</li>`).join("")}
        </ul>
      `;
  };

  this.render();
}
