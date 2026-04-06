import { useState } from "react";
import Navbar          from "./components/Navbar";
import Footer          from "./components/Footer";
import { WAFab }       from "./components/Shared";

import HomePage        from "./pages/HomePage";
import AboutPage       from "./pages/AboutPage";
import ServicesPage    from "./pages/ServicesPage";
import WhyUsPage       from "./pages/WhyUsPage";
import ProjectsPage    from "./pages/ProjectsPage";
import TestimonialsPage from "./pages/TestimonialsPage";
import ContactPage     from "./pages/ContactPage";

const PAGES = {
  Home:         HomePage,
  About:        AboutPage,
  Services:     ServicesPage,
  "Why Us":     WhyUsPage,
  Projects:     ProjectsPage,
  Testimonials: TestimonialsPage,
  Contact:      ContactPage,
};

export default function App() {
  const [currentPage, setCurrentPage] = useState("Home");

  const setPage = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const PageComponent = PAGES[currentPage] || HomePage;

  return (
    <div className="font-sora text-navy bg-white overflow-x-hidden">
      <Navbar currentPage={currentPage} setPage={setPage} />
      <main>
        <PageComponent setPage={setPage} />
      </main>
      <Footer setPage={setPage} />
      <WAFab />
    </div>
  );
}
