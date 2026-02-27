import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import GameLayout from './components/layout/GameLayout';
import IntroScreen from './pages/IntroScreen';
import MainMenu from './pages/MainMenu';
import Profile from './pages/Profile';
import SkillTree from './pages/SkillTree';
import Projects from './pages/Projects';
import ProductShowcase from './pages/ProductShowcase';
import Contact from './pages/Contact';

function App() {
  return (
    <ThemeProvider>
      <GameLayout>
        <Router>
          <Routes>
            <Route path="/" element={<IntroScreen />} />
            <Route path="/menu" element={<MainMenu />} />
            <Route path="/about" element={<Profile />} />
            <Route path="/skills" element={<SkillTree />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/products" element={<ProductShowcase />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Router>
      </GameLayout>
    </ThemeProvider>
  );
}

export default App;
