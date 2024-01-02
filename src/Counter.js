import { useState, useEffect } from "react";

// const Counter = () => {
//   const [count, setCount] = useState(0);
//   let i = 0;
//   return (
//     <>
//       <h1>{count}</h1>
//       <input
//         type="button"
//         value="increase"
//         onClick={() => {
//           for (i = 0; i < 5; i++) {
//             setCount(count + 1);
//           }
//         }}
//       />
//     </>
//   );

const Counter = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  useEffect(() => {
    console.log("count1= " + count1 + " count2 = " + count2);
  }, [count1]);
  return (
    <>
      <div align="center">
        <span>{count1}</span>
        <input
          type="button"
          value="count1"
          className="btn"
          onClick={() => {
            setCount1(count1 + 1);
          }}
        />
        <br />
        <span>{count2}</span>
        <input
          type="button"
          value="count2"
          className="btn"
          onClick={() => {
            setCount2(count2 + 1);
          }}
        />
      </div>
    </>
  );
};

export default Counter;
