import Navbar from "./Navbar";
import Footer from "./Footer";
import "./styles.css";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
export default App;
