import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './components/Title'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Codaisseur</h1>
        </header>
        <main>
          <Title content ="Some simple content"/>
        </main>
      </div>
    );
  }
}
// function App() {
//   return (
//     <div className=“App”>
//       <header className=“App-header”>
//         <img src={logo} className=“App-logo” alt=“logo” />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className=“App-link”
//           href=“https://reactjs.org”
//           target=“_blank”
//           rel=“noopener noreferrer”
//         >
//           Learn React and have fun!
//         </a>
//       </header>
//       <main>
//         <Title content=“Some simple Title”/>
//       </main>
//     </div>
//   );
//  }

export default App;
