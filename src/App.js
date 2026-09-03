
import './App.css';
import { BrowserRouter, Routes, Route, } from "react-router-dom";

import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Contact from "./pages/Contact";
import BookTable from "./pages/BookTable";
import About from './pages/About';
import ScrollToTop from "./components/ScrollToTop"

function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/book" element={<BookTable />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
