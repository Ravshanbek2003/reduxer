import { useCallback, useReducer } from "react";
import "./App.css";
import data from "./data";

const obj = [];
console.log(Object.entries(data)[0][1]);
console.log(Object.entries(data)[0][1].code);
for (const [key, value] of Object.entries(data)) {
  // console.log(key, value.value);
  obj.push({ key: key, value: value.value });
}
function cal(oldValue, action) {
  if (action.type === "firstValue") {
    oldValue.firstValue = action.value;
  }
  if (action.type === "secondValue") {
    oldValue.secondValue = action.value;
  }
  if (action.type === "firstInput") {
    oldValue.first =
      (action.value * oldValue.firstValue) / oldValue.secondValue;
  }
  if (action.type === "secondInput") {
    oldValue.second =
      (action.value * oldValue.secondValue) / oldValue.firstValue;
  }

  return { ...oldValue };
}

function App() {
  const [count, setCount] = useReducer(cal, {
    first: "",
    second: "",
    secondValue: "",
    firstValue: "",
  });

  const add = useCallback(() => {}, []);
  add();
  return (
    <>
      <label>
        <input
          defaultValue={count.second}
          type="number"
          onChange={(e) =>
            setCount({ value: e.target.value, type: "firstInput" })
          }
        />
        <select
          name=""
          id=""
          onChange={(e) =>
            setCount({ type: "firstValue", value: e.target.value })
          }
        >
          {obj.map((el) => {
            return (
              <option key={el.key} value={el.value}>
                {el.key}
              </option>
            );
          })}
        </select>
      </label>
      <br />
      <label>
        <input
          defaultValue={count.first}
          type="number"
          onChange={(e) =>
            setCount({ value: e.target.value, type: "secondInput" })
          }
        />
        <select
          name=""
          id=""
          onChange={(e) =>
            setCount({ type: "secondValue", value: e.target.value })
          }
        >
          {obj.map((el) => {
            return (
              <option key={el.key} value={el.value}>
                {el.key}
              </option>
            );
          })}
        </select>
      </label>
      <br />
    </>
  );
}

export default App;
