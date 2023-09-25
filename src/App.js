import {useState} from "react";

function markDone(list, index) {
  return list.map((item, i) => (i === index ? {...item, done: true} : item));
}

function Counter({ start }) {
  const [counter, setCounter] = useState(start);
  return (
    <main>
      <p>Counter: {counter}</p>
      <button onClick={() => setCounter((val) => val + 1)}>
        Increment
      </button>
      <button onClick={() => setCounter(0)}>
        Reset
      </button>
    </main>);
}


const PLUS = (a, b) => a + b;
const MINUS = (a, b) => a - b;
const MULTIPLY = (a, b) => a * b;

function Calculator({a, b}) {
  const [operator, setOperator] = useState(() => PLUS);
  return (
    <main>
      <h1>Calculator</h1>
      <button
        onClick={() => setOperator(() => PLUS)}
      >
        Plus
      </button>
      <button
        onClick={() => setOperator(() => MINUS)}
      >
        Minus
      </button>
      <button
        onClick={() => setOperator(() => MULTIPLY)}
      >
        Multiply
      </button>
      <p>
        Result of applying operator to {a} and {b}:
        <code> {operator(a, b)}</code>
      </p>
    </main>);
}

function TodoApplication({initialList}) {

  const [todos, setTodos] = useState(initialList);

  const [hideDone, setHideDone] = useState(false);

  const filteredTodos = hideDone ? todos.filter(({done}) => !done) : todos;

  return (
    <main>
      <Counter start={0}/>
      <Counter start={123} />

      <Calculator a={7} b={4} />
      <div style={{display: "flex"}}>
        <button onClick={() => setHideDone(false)}>Show all</button>
        <button onClick={() => setHideDone(true)}>Hide done</button>
      </div>
      {filteredTodos.map((todo, index) => (
        <p key={todo.task}>
          {todo.done ? (
            <strike>{todo.task}</strike>
          ) : (
            <>
              {todo.task}
              <button
                onClick={() => setTodos((value) => markDone(value, todo.index))}
              >
                x
              </button>
            </>
          )}
        </p>
      ))}
    </main>
  );
}

function App() {
  const items = [
    {task: "Feed the plants", done: false, index: 0},
    {task: "Water the dishes", done: false, index: 1},
    {task: "Clean the catbox", done: false, index: 2},
  ];
  return <TodoApplication initialList={items}/>;
}

export default App;
