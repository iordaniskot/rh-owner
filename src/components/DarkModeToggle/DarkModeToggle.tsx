import { useState, useEffect } from 'react';
import './DarkModeToggle.css';

interface DarkModeToggleProps {
  fixed?: boolean;
}

const DarkModeToggle = ({ fixed = true }: DarkModeToggleProps) => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check if user has a saved preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    
    if (newIsDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <div className={fixed ? "fixed top-4 right-4 z-50" : "relative"}>
      <div className="toggle-container">
        <label htmlFor="toggle" className="toggle-label">
          <div className={`toggle-div ${isDark ? 'night' : ''}`}>
            <input 
              type="checkbox" 
              id="toggle" 
              className="toggle-input"
              checked={isDark}
              onChange={toggleDarkMode}
            />
            <div className="clouds">
              <div className="cloud cloud-1"></div>
              <div className="cloud cloud-2"></div>
              <div className="cloud cloud-3"></div>
              <div className="cloud cloud-4"></div>
              <div className="cloud cloud-5"></div>
            </div>
            <div className="backdrops">
              <div className="backdrop"></div>
            </div>
            <div className="stars">
              <div className="star star-1"></div>
              <div className="star star-2"></div>
              <div className="star star-3"></div>
            </div>
            <div className="sun-moon">
              <div className="crater"></div>
            </div>
          </div>
        </label>
      </div>
    </div>
  );
};

export default DarkModeToggle;