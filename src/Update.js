import { useState } from "react";

const Update = () => {
  const [name, setName] = useState();
  let i = 0;
  return (
    <>
      <h1>{name}</h1>
      <input
        type="text"
        onClick={(event) => {
          for (i = 0; i < 5; i++) {
            setName(event.target.input);
          }
        }}
      />
      <div class="dv" style={backgroundColor:red}></div>
    </>
  );
};
export default Update;
