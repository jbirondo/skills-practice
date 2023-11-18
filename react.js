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