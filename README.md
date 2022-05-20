Setup

`create-react-app`
Sample React application

`npx`: Node Package Execute

```bash
yarn
npm
```

```bash
npx create-react-app@latest react-learning --use-npm
npm install (npm i)

```

Learnings

(6th May)

- State/ Props
- Class Components (state, constructor)
- bind & arrow functions

(9th May)

- Lifecycle (Mount / Update / Unmount)
  https://reactjs.org/docs/react-component.html
  https://medium.com/codex/the-lifecycle-of-a-react-component-8e01332a068d

(10th May)

- Practices
- Function Components

_Class Component_

- A class component requires you to extend from React. Component and create a render function which returns a React element (JSX).
- It must have the render() method returning JSX (which is syntactically similar to HTML)
- Also known as Stateful components because they implement logic and state.
- React lifecycle methods can be used inside class components (for example, componentDidMount).
- It requires different syntax inside a class component to implement hooks.
- Constructor are used as it needs to store state.

  example:

```bash
constructor(props) {
  super(props);
  this.state = {name: ‘ ‘}
}

```

_Functional Component_

- A functional component is just a plain JavaScript function that accepts props as an argument and returns a React element (JSX).
- There is no render method used in functional components.
- React lifecycle methods (for example, componentDidMount) cannot be used in functional components.
  Hooks can be easily used in functional components to make them Stateful.
- Also known as Stateless components as they simply accept data and display them in some form, that they are mainly responsible for rendering UI.
- Constructors are not used.
  example:

```bash
const [name, setName] = React.useState(‘ ‘)
```

## Hooks

_useState_

- Implement state in Functional components

_useEffect_

- Implement lifecycle methods in Functional components
