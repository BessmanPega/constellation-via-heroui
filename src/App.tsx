import { Route, Routes } from "react-router-dom";

import IndexPage from "@/pages/index";
import DocsPage from "@/pages/docs";
import PricingPage from "@/pages/pricing";
import BlogPage from "@/pages/blog";
import AboutPage from "@/pages/about";
import PegaPage from "@/pages/pega";

function App() {
  return (
    <Routes>
      <Route element={<IndexPage />} path="/" />
      <Route element={<DocsPage />} path="/amenities" />
      <Route element={<PricingPage />} path="/accommodations" />
      <Route element={<BlogPage />} path="/dispatch" />
      <Route element={<AboutPage />} path="/about" />
      <Route element={<PegaPage />} path="/lost-property" />
    </Routes>
  );
}

export default App;
