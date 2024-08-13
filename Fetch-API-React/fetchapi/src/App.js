import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";
import Template from "./components/layouts/Template";

import Home from "./components/pages/Home";
import Blog from "./components/pages/Blog";
import About from "./components/pages/About";
import Post from "./components/pages/Post";
import NotFound from "./components/pages/NotFound";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Template>
          <Routes>
            <Route path="/" element={<Home />} exact></Route>
            <Route path="/about" element={<About />} exact></Route>
            <Route path="/blog" element={<Blog />} exact></Route>
            <Route path="/blog/:id" element={<Post />} exact></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </Template>
        <Footer />
      </Router>
    </>
  );
}

export default App;
