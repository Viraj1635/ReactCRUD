import { createRoot } from "react-dom/client";
import { Routes, Route, BrowserRouter, Outlet } from "react-router-dom";

import App from "./App";
import Home from "./Home";
import Planet from "./Planet";
import FacList from "./FacList";
import Example from "./Example";
import Icons from "./Icons";
import About from "./About";
import Counter from "./Counter";
import FacLis from "./FacList";
import Apis from "./Apis";
import ApisId from "./ApisId";
import ApiInsert from "./ApiInsert";
import ApiUpdate from "./ApiUpdate";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

// function Boot() {
//   document.body.style.backgroundColor = (15, 15, 15);
// }

root.render(
  <>
    {/* <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index path="/" element={<Home />}></Route>
          <Route path="/planet" element={<Planet />}></Route>
          <Route path="/example" element={<Example />}></Route>
          <Route path="/icons" element={<Icons />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Route>
      </Routes>
    </BrowserRouter> */}
    {/* <FacList /> */}
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Apis />}></Route>
        <Route path="/:id" element={<ApisId />}></Route>
        <Route path="/insert" element={<ApiInsert />}></Route>
        <Route path="/update/:id" element={<ApiUpdate />}></Route>
      </Routes>
    </BrowserRouter>
    {/* <Counter /> */}
  </>
);
