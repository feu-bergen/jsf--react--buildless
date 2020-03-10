# Hello World React

Showing a few difference between creating and rendering with React vs plain JavaScript.

React is in react.html and react.js and plain JS is in plain.html and plain.js.

## Some Differences

### JSX
the main difference is JSX. JSX is not available in JavaScript and must be compiled.  Because of this Babel must be used.  JSX replaces the template literal string.  It is important to know that JSX is **not** a string.  It will get compiled down to React objects.

### First render
Pass root DOM and root component to `ReactDOM.render()`.

### Passing props to components
Using HTML attribute style (`name="World"`), instead of JSON style (`{ name: "World" }`).  Note that the style is different but produces the same props object.  Inside the App component, the props object is exactly the same for both examples.

### Outputting data in HTML
JSX using `{variable}` and plain JS template literals use `${variable}`.