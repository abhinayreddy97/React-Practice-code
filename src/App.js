import "./styles.css";
import { useState, useEffect } from "react";
// import PersInfo from "./components/PersInfo";

function App() {
  const [obj, setCount] = useState({
    count: 0,
    flag: true,
  });
  const [time, setTime] = useState(new Date().toLocaleString());
  useEffect(() => {
    setInterval(() => {
      setTime(new Date().toLocaleString());
    }, 1000);
  });
  // const[flag,setFlag] = useState(true);
  const changeCounter = (op) => {
    let tc = obj.count;
    if (op == "+") {
      tc++;
      setCount({ ...obj, count: tc });
    } else {
      tc--;
      setCount({ ...obj, count: tc });
    }
  };
  return (
    //   <div className="App">
    //     <h1>Personal Info </h1>
    //     <div>
    //       <div className="persInfo">
    //         <PersInfo name="John" age="25" />
    //       </div>
    //       <div className="persInfo">
    //         <PersInfo className="persInfo" name="Mary" age="32" />
    //       </div>
    //       <div className="persInfo">
    //         <PersInfo className="persInfo" name="Com" age="22" />
    //       </div>
    //     </div>
    //   </div>
    <div className="App">
      <h2> Counter Example </h2>
      <h2>{obj.count}</h2>
      <div>
        <button
          style={{ color: "red", background: "white" }}
          onClick={() => changeCounter("+")}
        >
          {" "}
          Increment
        </button>
        <button onClick={() => changeCounter("-")}> Decrement</button>
        <h2>{obj.flag.toString()}</h2>

        <button onClick={() => setCount({ ...obj, flag: !obj.flag })}>
          toggle
        </button>
        <h2>{JSON.stringify(obj)}</h2>
      </div>
      <div>
        <h2>Date {time}</h2>
        <div onClick={() => setTime(new Date().toLocaleString())}></div>
      </div>
    </div>
  );
}
export default App;
