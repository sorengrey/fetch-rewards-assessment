// import logo from "./logo.svg";
import { Box, VStack } from "@material-ui/core";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <VStack>
          <p>Meet Your New Best Friend</p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </VStack>
      </header>
    </div>
  );
}

export default App;
