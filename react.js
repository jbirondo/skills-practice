/**
  Challenge: Display all users to the browser
  Small Hint: Use array map with react key
  
  Solution: https://codepen.io/angelo_jin/pen/wvreMpZ
  Video for reference: https://youtu.be/VzNNjNmbXpY
**/

const users = [
  { name: "John Doe", id: 1 },
  { name: "Jane Doe", id: 2 },
  { name: "Billy Doe", id: 3 }
];

const usersNames = users.map((user) => <li key={user.id}>{user.name}</li>)

function App() {
  return (
    <>
      <h3>User names</h3>
      <ul>{usersNames}</ul>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

/**
  Challenge: Make the button functional
  A click on button should toggle (show/hide) the string `Toggle Challenge` each time it is pressed
  
  Solution: https://codepen.io/angelo_jin/pen/abLwyrL
  Video for reference: https://youtu.be/VzNNjNmbXpY
**/
function App() {
  const [on, setOn] = React.useState(true);

  return (
    <>
      <button onClick={
          () => setOn(!on)
        }>Hide Element Below</button>

      {on && <div>Toggle Challenge</div>}
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

/** 
  Challenge: User should be able to type in any characters on input and those character should show in the browser.
  
  Solution: https://codepen.io/angelo_jin/pen/yLzvMop
  Video for reference: https://youtu.be/VzNNjNmbXpY
**/
function App() {
  const [value, setValue] = React.useState("");

  return (
    <>
      <input 
        type="text" 
        placeholder="Enter Text" 
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <p>{value}</p>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

/**
  Challenge: Make button disabled when there is no character on the input field. Enable the `Submit` button (remove button from being disabled) when there is at least one character.
  
  Solution: https://codepen.io/angelo_jin/pen/dyVmyYz
  Video for reference: https://youtu.be/VzNNjNmbXpY
**/
function App() {
  const [value, setValue] = React.useState("");

  return (
    <>
      <h3>Disable Button Challenge</h3>
      <input 
        type="text" 
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button disabled={value.length == 0}>Submit</button>
    </>
  );
}

/** 
  Challenge: Parent text (I need to be updated from my child) should be updated when Child button below is clicked. Feel free to use any string to update the parent's current string.
  
  Solution: https://codepen.io/angelo_jin/pen/KKXoKgO
  Video for reference: https://youtu.be/VzNNjNmbXpY
**/
function Child({ setValue }) { //add setValue to Child props
  return (
    <>
      <div>Child</div>
      <button
        onClick={(e) => setValue("Updated after click")}
      >
        Change Parent Value
      </button>
    </>
  );
}//add on click function that updates setValue

function Parent() {
  const [value, setValue] = React.useState(
    "I need to be updated from my child"
  );

  return (
    <>
      <h3>Update Parent State Challenge (Using Callback)</h3>
      <div className="wrapper">
        <div>Parent</div>
        <div className="box-wrapper">{value}</div>
      </div>

      <div className="wrapper">
        <Child setValue={setValue}/>
      </div>
    </>
  );
}//add setValue as prop to child component 

ReactDOM.render(<Parent />, document.getElementById("root"));

/**
  Challenge: Show entire Child component content inside Parent component. Only add code on Parent Component below
  
  Solution: https://codepen.io/angelo_jin/pen/MWEVJNb
  Video for Reference: https://youtu.be/VzNNjNmbXpY
**/
function Child() {
  return <div>This is children content</div>;
}

// Add code only here
function Parent({ children }) {//on Parent component add the children as prop
  return (
    <div>
      <h3>Parent Component</h3>
      {children}
    </div>
  );
}//then find a place where we want the children to show on the parent component

function App() {
  return (
    <Parent>
      <Child />
      <Child />
    </Parent>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

/** 
  Challenge: Make this app work like a calculator that can add two numbers.
  
  Functionality: When user place numbers on first and second input and hit the button. The sum should appear on the `Total: ` as an output. 
  
  Solution: https://codepen.io/angelo_jin/pen/BawrWzy
  Video for reference: https://youtu.be/VzNNjNmbXpY
**/
function App() {
  const [number1, setNumber1] = React.useState();
  const [number2, setNumber2] = React.useState();
  const [total, setTotal] = React.useState(0);

  return (
    <div>
      <h2>Adding Two Numbers</h2>
      <input 
        placeholder="First Number" 
        type="number" 
        value={number1}//enter the number state and the value setter for both inputs
        onChange={(e) => setNumber1(e.target.value)}
      />
      <input 
        placeholder="Second Number" 
        type="number" 
        value={number2}
        onChange={(e) => setNumber2(e.target.value)}
      />

      <button
        onClick={(e) => setTotal(parseInt(number1) + parseInt(number2))}//on the button add a click event that updates setTotal, total state initialized to 0
      >
        Add Two Numbers
      </button>
      <p>Total: {total}</p>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

/**
  Challenge: Pressing `Increment` button should increase the counter count by one. Pressing `Decrement` button should decrease the counter count by one.
  
  Solution: https://codepen.io/angelo_jin/pen/yLzKMXX
  Video for reference: https://youtu.be/VzNNjNmbXpY
**/
const App = () => {
  const [counter, setCounter] = React.useState(0);//first create the counter variable and the counter setter

  return (//add the counter variable to display
    <div>
      <h2>Counter: {counter}</h2>
      <button
        onClick={(e) => setCounter(counter + 1)}//on each button create an onClick event handler that calls the setter to update the counter
      >
        Increment
      </button>
      <button
        onClick={(e) => setCounter(counter - 1)}
      >
        Decrement
      </button>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));