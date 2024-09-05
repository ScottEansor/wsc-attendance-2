import NavBar from "./Components/NavBar.jsx";
import Attendance from "./Components/Attendance.jsx";
import CoachReview from "./Components/CoachReview.jsx";
import Utility from "./Components/Utility.jsx";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<Attendance />} />
        <Route path="/utility" element={<Utility />} />
        <Route path="/coachreview" element={<CoachReview />} />
      </Routes>

      <NavBar />
    </div>
  );
}

export default App;
