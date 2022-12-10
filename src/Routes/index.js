import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Auth/Login";
import Signup from "../pages/Auth/Signup";
import Options from "../pages/Options";
import CreateTextPost from "../pages/CreatePost/Text";
import TextFeed from "../pages/Feed/Feed";
import TextEditorAnswer from "../pages/AnswerPage/TextEditorAnswer";
export default function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/Options" element={<Options />} />
        <Route exact path="/CreateTextPost" element={<CreateTextPost />} />
        <Route exact path="/Feed" element={<TextFeed />} />
        <Route
          exact
          path="/TextEditorAnswer/:id"
          element={<TextEditorAnswer />}
        />
      </Routes>
    </Router>
  );
}
