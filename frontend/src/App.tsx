import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Navigation from './components/layout/Navigation';
import PageTransition from './components/layout/PageTransition';
import InteractiveBackground from './components/shared/InteractiveBackground';

// Lazy load pages
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Team = React.lazy(() => import('./pages/Team'));
const Events = React.lazy(() => import('./pages/Events'));
const Resources = React.lazy(() => import('./pages/Resources'));
const Blog = React.lazy(() => import('./pages/Blog'));
const Contact = React.lazy(() => import('./pages/Contact'));

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-gray-50/80 dark:bg-gray-900/80 text-gray-900 dark:text-gray-100">
          <InteractiveBackground />
          <Navigation />
          <React.Suspense
            fallback={
              <div className="flex items-center justify-center min-h-screen">
                <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-indigo-600"></div>
              </div>
            }
          >
            <main className="pt-16">
              <Routes>
                <Route path="/" element={<PageTransition><Home /></PageTransition>} />
                <Route path="/about" element={<PageTransition><About /></PageTransition>} />
                <Route path="/team" element={<PageTransition><Team /></PageTransition>} />
                <Route path="/events" element={<PageTransition><Events /></PageTransition>} />
                <Route path="/resources" element={<PageTransition><Resources /></PageTransition>} />
                <Route path="/blog" element={<PageTransition><Blog /></PageTransition>} />
                <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
              </Routes>
            </main>
          </React.Suspense>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;