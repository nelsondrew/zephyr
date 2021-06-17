import React from "react";
import logo from "./logo.svg";
import { Provider } from "react-redux";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { switchUnauthorized } from "./Slices/AppSlice";
import TestComponent from "./Components/TestComponent";

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
    <>
      <p
        onClick={() => {
          //@ts-ignore
          dispatch(switchUnauthorized());
        }}
      >
        Click to Increment {dummy}
      </p>
      <TestComponent />
    </>
  );
}

export default App;
