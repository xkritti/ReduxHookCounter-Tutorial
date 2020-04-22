import React from 'react';

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";


function App() {
  const counter = useSelector(state => state.count);
  const dispatch = useDispatch();

  return (

    <div style={{ textAlign: "center" }}>
      <h1>{counter}</h1>
      <button
        onClick={() =>
          dispatch({ type: "ADD" })
        }
      >
        +
    </button> &nbsp;&nbsp;&nbsp;

      <button
        onClick={() =>
          dispatch({ type: "DEL" })
        }
      >
        -
      </button>&nbsp;&nbsp;&nbsp;

      <button
        onClick={() =>
          dispatch({
            type: "RESET"
          })
        }
      >
        Reset
      </button>
    </div>

  );
}

export default App;
