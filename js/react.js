// Creaste App component
function App(props) {
    // convert data to HTML
    return (
        <h1 className="title">Hello, {props.name}!</h1>
    );
}

// Render application
ReactDOM.render(
    // pass in { name: "World" } props
    <App name="World" />, 
    document.getElementById("root")
);