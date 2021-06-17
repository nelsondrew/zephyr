import React from "react";
import logo from "./logo.svg";
import { Provider } from "react-redux";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { switchUnauthorized } from "./Slices/AppSlice"; // action
import TestComponent from "./Components/TestComponent";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const p = "srt";
  const dispatch = useDispatch(); // it is a hook
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
    <>
      <Router>
        <p
          onClick={() => {
            //@ts-ignore
            dispatch(switchUnauthorized());
          }}
        >
          Click to Increment {dummy}
        </p>
        {/* <TestComponent /> */}
        <Switch>
          <Route exact path="/chat">
            <div>This is chat component</div>
          </Route>
          <Route exact path="/home">
            <div>This is home component</div>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
