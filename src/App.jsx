import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PostDetail from "./pages/PostDetail";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post:id" element={<PostDetail />} />
        <Route
          path="/*"
          element={
            <>
              <h3>Error page...</h3>
            </>
          }
        />
      </Routes>
    </>
  );
};

export default App;
