import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Nav from "./components/link/Nav";
import UserEdit from "./components/UserEdit";

function App() {
  return (
    <>
      <div className={'container mt-3'}>
        <Nav />

        <hr />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="edit/:id" element={<UserEdit />} />
        </Routes>
      </div>
    </>);
}

export default App;
