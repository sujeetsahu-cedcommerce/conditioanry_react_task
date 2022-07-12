// import logo from './logo.svg';
import './App.css';
import EvanOddColor from './EvanOddColor';
import Suggestion from './Suggestion';



function App() {
  return (
    <div className="App">
      <h2>Q1. a: Make a search suggestion application as given in attachment.</h2>
      <h3>Search the States of India</h3>
     <Suggestion/>
     <hr/>
     <h2>Q2.  Pass a prop that contains a number from a parent component to child component and set the background color of enclosing div to red or blue depending on the number passed is even or odd</h2>
     <EvanOddColor/>
    </div>
  );
}

export default App;
