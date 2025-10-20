<<<<<<< HEAD
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
=======
import { HashRouter as BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
>>>>>>> b6198cb (update vercel)
import CountryList from "./Pages/CountryList";
import CountryDetails from "./Pages/CountryDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
<<<<<<< HEAD
        <Route path="/" element={<Navigate to="/CountryList" replace />} />
        <Route path="/CountryList" element={<CountryList />} />
=======
        {/* Redirect root to /CountryList */}
        <Route path="/" element={<Navigate to="/CountryList" replace />} />
        {/* List page */}
        <Route path="/CountryList" element={<CountryList />} />
        {/* Details page with dynamic :name */}
>>>>>>> b6198cb (update vercel)
        <Route path="/CountryDetails/:name" element={<CountryDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
