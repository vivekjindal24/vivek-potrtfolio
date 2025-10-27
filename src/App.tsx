import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Toaster } from '@/components/ui/toaster';
import { ThemeProvider } from '@/context/ThemeProvider';
import Layout from '@/components/Layout';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Projects from '@/pages/Projects';
import Publications from '@/pages/Publications';
import Experience from '@/pages/Experience';
import Contact from '@/pages/Contact';
import NotFound from '@/pages/NotFound';
import AnimatedCursor from '@/components/AnimatedCursor';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <AnimatedCursor />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="projects" element={<Projects />} />
              <Route path="publications" element={<Publications />} />
              <Route path="experience" element={<Experience />} />
              <Route path="contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </AnimatePresence>
        <Toaster />
      </Router>
    </ThemeProvider>
  );
}

export default App;
