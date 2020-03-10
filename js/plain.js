// Creaste App component
function App(props) {
    // convert data to HTML
    return `
        <h1 class="title">Hello, ${props.name}!</h1>
    `;
}

// Render application
document.getElementById("root").innerHTML =
    // pass in { name: "World" } props
    App({ name: "World" });