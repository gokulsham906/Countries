import { HashRouter as BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import CountryList from "./Pages/CountryList";
import CountryDetails from "./Pages/CountryDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Redirect root to /CountryList */}
        <Route path="/" element={<Navigate to="/CountryList" replace />} />
        {/* List page */}
        <Route path="/CountryList" element={<CountryList />} />
        {/* Details page with dynamic :name */}
        <Route path="/CountryDetails/:name" element={<CountryDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
