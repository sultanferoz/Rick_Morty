import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Container/homeLayout/Index";
import Profile from "./Container/profile/Index";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile/:id" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
