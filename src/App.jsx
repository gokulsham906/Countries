<<<<<<< HEAD
import { HashRouter as BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
=======
<<<<<<< HEAD
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
=======
import { HashRouter as BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
>>>>>>> b6198cb (update vercel)
>>>>>>> 5365f78
import CountryList from "./Pages/CountryList";
import CountryDetails from "./Pages/CountryDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
<<<<<<< HEAD
=======
<<<<<<< HEAD
        <Route path="/" element={<Navigate to="/CountryList" replace />} />
        <Route path="/CountryList" element={<CountryList />} />
=======
>>>>>>> 5365f78
        {/* Redirect root to /CountryList */}
        <Route path="/" element={<Navigate to="/CountryList" replace />} />
        {/* List page */}
        <Route path="/CountryList" element={<CountryList />} />
        {/* Details page with dynamic :name */}
<<<<<<< HEAD
=======
>>>>>>> b6198cb (update vercel)
>>>>>>> 5365f78
        <Route path="/CountryDetails/:name" element={<CountryDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
