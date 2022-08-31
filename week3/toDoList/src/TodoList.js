export default function TodoList({ target, initialState }) {
    const Container = document.createElement("div");

    target.appendChild(Container);

    this.state = initialState;

    this.render = () => {
        Container.innerHTML = `
        <ul>
            ${this.state.map(({ text }) => `<li>${text}</li>`).join("")}
        </ul>
      `;
    };

    this.render();
}
