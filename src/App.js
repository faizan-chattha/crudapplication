import React from "react";
import { Routes, Route } from "react-router-dom";
import Create from "./component/Create";
import Read from "./component/Read";
import Edit from "./component/Edit";

function App() {
  return (
    <>
      <div className="container">
        <Routes>
          <Route path="/" element={<Read />} />
          <Route path="/create" element={<Create />} />
          <Route path="/edit" element={<Edit />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
