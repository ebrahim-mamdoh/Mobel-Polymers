// src/App.js
import { Routes, Route } from "react-router-dom";

// استيراد الصفحات
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import MediaCenter from "./pages/MediaCenter/MediaCenter";
import Contact from "./pages/Contact/Contact";

// استيراد الـ Header
import Header from "./components/Header";
// استيراد الـ Footer
import Footer from "./components/footer/Footer.jsx";  // 👈 تأكد من المسار

function App() {
  return (
    <div>
      {/* Navbar من الـ Header */}
      <Header />

      {/* Pages */}
      <div style={{ padding: "2rem" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/media-center" element={<MediaCenter />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>

      {/* Footer في الأسفل */}
      <Footer />
    </div>
  );
}

export default App;
