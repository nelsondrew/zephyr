import React from "react";
import logo from "./logo.svg";
import { Provider } from "react-redux";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { switchUnauthorized } from "./Slices/AppSlice";

function App() {
  const p = "srt";
  const dispatch = useDispatch();
  //@ts-ignore
  if (p === "") {
    console.log("warning");
    console.log("test");
  }
  console.log("hi");
  const { dummy } = useSelector((state: any) => ({
    dummy: state.appReducer.dummy,
  }));
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p
          onClick={() => {
            console.log("cliced");
            //@ts-ignore
            dispatch(switchUnauthorized());
          }}
        >
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React {dummy}
        </a>
      </header>
    </div>
  );
}

export default App;
