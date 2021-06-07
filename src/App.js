import './App.css';

function App() {
  const items = [
    'item 1',
    'item 2',
    'item 3'
  ]

  const appTitle = process.env.REACT_APP_NAME;
  console.log(appTitle);

  return (
    <div className="App">
      <div className="container">
        <h1>{appTitle}</h1>
        {items.map((item, idx) => {
          return <div className="item" key={idx}>{item}</div>
        })}
      </div>
    </div>
  );
}

export default App;
