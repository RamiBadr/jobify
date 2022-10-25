import { Routes, Route, Link } from "react-router-dom";
import {Dashboard, Landing, Register, Error} from "./pages/";

function App() {
  return (
    <>
      <nav>
        <Link to="/" >Dashboard</Link>
        <Link to="/landing">Landing</Link>
        <Link to="/register">Register</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
