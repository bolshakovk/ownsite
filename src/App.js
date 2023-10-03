import React, { useState, useEffect } from 'react';
import Home from './Home.jsx';
import TechStack from './TechStack.jsx';
import ThemeProvider from './ThemeProvider.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Projects from './Projects.jsx';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Функция для переключения темы
  const handleThemeToggle = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem('theme', newDarkMode ? 'dark' : 'light'); // Сохраняем тему в localStorage
  };

  // При монтировании компонента, проверяем текущую тему из localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setDarkMode(savedTheme === 'dark');
    }
  }, []);

  // Добавляем класс для изменения темы
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  return (
    <ThemeProvider>
      <Router>
        <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
          <head>
            <meta charset="UTF-8" />
          </head>
          <header className="header">
            <nav className={`nav-menu ${darkMode ? 'nav-row' : ''}`}>
              <a className="nav-link" href="/">
                <h2>Домой</h2>
              </a>
              <a className="nav-link" href="/tech-stack">
                <h2>Технологический стек</h2>
              </a>
              <a className="nav-link" href="/projects">
                <h2>Проекты</h2>
              </a>
            </nav>
            <div className="theme-switch">
              <input
                type="checkbox"
                id="theme-toggle"
                checked={darkMode}
                onChange={handleThemeToggle}
              />
              <label htmlFor="theme-toggle">
                <span className="sun-icon">☀</span>
                <span className="moon-icon">&#127770;</span>
              </label>
            </div>
          </header>
          <Routes>
            <Route path="/" element={<Home darkMode={darkMode} themeToggle={handleThemeToggle} />} />
            <Route path="/tech-stack" element={<TechStack darkMode={darkMode} themeToggle={handleThemeToggle} />} />
            <Route path='projects' element={<Projects darkMode={darkMode} themeToggle={handleThemeToggle}/>} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;