import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/globals.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Loading from './components/Loading/Loading';

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const ArtworkList = lazy(() => import('./pages/ArtworkList'));
const ArtworkDetail = lazy(() => import('./pages/ArtworkDetail'));
const NotFound = lazy(() => import('./pages/NotFound'));

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="main-content">
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/walls" element={<ArtworkList type="walls" />} />
              <Route path="/walls/:id" element={<ArtworkDetail type="walls" />} />
              <Route path="/advWalls" element={<ArtworkList type="advWalls" />} />
              <Route path="/advWalls/:id" element={<ArtworkDetail type="advWalls" />} />
              <Route path="/canvas" element={<ArtworkList type="canvas" />} />
              <Route path="/canvas/:id" element={<ArtworkDetail type="canvas" />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
