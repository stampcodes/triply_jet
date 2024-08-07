import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import TripDetails from "./pages/TripDetails/TripDetails";
import PurchaseSummary from "./pages/PurchaseSummary/PurchaseSummary";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/trip/:id" element={<TripDetails />} />
          <Route path="/purchase" element={<PurchaseSummary />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
