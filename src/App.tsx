import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import TripDetails from "./pages/TripDetails/TripDetails";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/trip/:id" element={<TripDetails />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
