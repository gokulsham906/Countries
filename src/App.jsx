import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import CountryList from "./Pages/CountryList";
import CountryDetails from "./Pages/CountryDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/CountryList" replace />} />
        <Route path="/CountryList" element={<CountryList />} />
        <Route path="/CountryDetails/:name" element={<CountryDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
