// ThemeProvider.jsx
import React, { createContext, useContext, useState } from 'react';

// Создайте контекст для темы
const ThemeContext = createContext();

// Создайте функцию-поставщик, которая будет управлять состоянием темы
function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  // Функция для переключения темы
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    // Оберните детей в провайдер контекста с состоянием темы
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Создайте хук, который можно будет использовать для доступа к состоянию темы и функции для ее изменения
function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

export default ThemeProvider;
export { ThemeProvider, useTheme };