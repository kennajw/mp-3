import { createBrowserRouter, Routes, RouterProvider, Route } from "react-router-dom";
import PageContainer from "./components/interfaces/PageContainer";
import Home from "./components/pages/Home";
import Education from "./components/pages/Education";
import Employment from "./components/pages/Employment";
import Projects from "./components/pages/Projects";
import Extracurriculars from "./components/pages/Extracurriculars";
import Portfolio from "./components/pages/Portfolio";

function Root() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/education" element={<Education />}/>
        <Route path="/employment" element={<Employment />}/>
        <Route path="/projects" element={<Projects />}/>
        <Route path="/extracurriculars" element={<Extracurriculars />}/>
        <Route path="/portfolio" element={<Portfolio />}/>
      </Routes>
    </>
  );
}

const router = createBrowserRouter(
  [{ path: "*", Component: Root}]
);

export default function App() {
  return (
      <PageContainer>
        <RouterProvider router={router} />
      </PageContainer>
  );
}
