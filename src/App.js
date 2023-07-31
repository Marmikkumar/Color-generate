import React, { useState } from "react";
import "./styles.css";
import SingleColor from "./SingleColor";

import Values from "values.js";

export default function App() {
  const [color, setcolor] = useState("#f15025");
  const [error, seterror] = useState(false);
  const [list, setlist] = useState(new Values("#f15025").all(10));

  const handlesubmit = (e) => {
    e.preventDefault();
    try {
      setlist(new Values(color).all(10));
      seterror(false);
      console.log(list);
    } catch (error) {
      seterror(true);
      console.log(error);
    }
  };

  return (
    <>
      <div>
        <div className="generator">
          <h3>Color Generator : </h3>
          <div className="box" style={{ backgroundColor: `${color}` }}>
            {" "}
          </div>
          <form onSubmit={handlesubmit}>
            <input
              placeholder="#f15025"
              onChange={(e) => setcolor(e.target.value)}
              type="text"
            ></input>
            <button
              type="submit"
              className="btn"
              style={{ backgroundColor: `${color}` }}
            >
              Submit
            </button>
          </form>
        </div>
        <div className="content">
          {list.map((item, index) => (
            <SingleColor key={index} index={index} {...item} />
          ))}
        </div>
      </div>
    </>
  );
}
