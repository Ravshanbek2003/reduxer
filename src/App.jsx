import { useReducer } from "react";
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
  console.log(count);
  // const add = useCallback(() => {}, []);
  // add();
  return (
    <>
      <div style={{ display: "flex", alignItems: "center" }}>
        <label className="custom-field one">
          <input
            placeholder=" "
            defaultValue={count.second}
            type="number"
            onChange={(e) =>
              setCount({ value: e.target.value, type: "firstInput" })
            }
          />
          <span className="placeholder">Enter amount</span>
        </label>
        <div style={{ marginTop: "15px" }} className="select">
          <select
            name="format"
            id="format"
            onChange={(e) =>
              setCount({ type: "firstValue", value: e.target.value })
            }
          >
            <option value="" selected disabled>
              from
            </option>
            {obj.map((el) => {
              return (
                <option key={el.key} value={el.value}>
                  {el.key}
                </option>
              );
            })}
          </select>
        </div>
      </div>

      <br />
      <div style={{ display: "flex", alignItems: "center" }}>
        <label className="custom-field one">
          <input
            placeholder=" "
            defaultValue={count.first}
            type="number"
            onChange={(e) =>
              setCount({ value: e.target.value, type: "secondInput" })
            }
          />
          <span className="placeholder">Enter amount</span>
        </label>
        <div style={{ marginTop: "15px" }} className="select">
          <select
            name="format"
            id="format"
            onChange={(e) =>
              setCount({ type: "secondValue", value: e.target.value })
            }
          >
            <option value="" selected disabled>
              to
            </option>
            {obj.map((el) => {
              return (
                <option key={el.key} value={el.value}>
                  {el.key}
                </option>
              );
            })}
          </select>
        </div>
      </div>
      <br />

      <br />
      <br />
    </>
  );
}

export default App;
