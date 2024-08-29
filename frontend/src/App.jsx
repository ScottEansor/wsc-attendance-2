import NavBar from "./Components/NavBar.jsx";
import Attendance from "./Components/Attendance.jsx";
import CoachReview from "./Components/CoachReview.jsx";
import Utility from "./Components/Utility.jsx";

function App() {
  return (
    <div className="app-container">
      {/* <Utility /> */}
      {/* <Attendance /> */}
      <CoachReview></CoachReview>
      <NavBar />
    </div>
  );
}

export default App;
