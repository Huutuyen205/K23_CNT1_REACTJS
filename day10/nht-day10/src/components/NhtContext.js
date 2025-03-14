import React, { createContext, useContext, useState } from "react";

// Tạo Context
const ThemeContext = createContext();

// Provider cho toàn ứng dụng
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Hook custom để dễ sử dụng
export const useTheme = () => useContext(ThemeContext);
