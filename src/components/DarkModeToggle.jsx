import { useState, useEffect } from 'react';

const DarkModeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check initial theme
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    setIsDark(isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const handleToggle = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', !isDark);
  };

  return (
    <div className="flex items-center justify-center">
      {/* Desktop Sliding Toggle */}
      <div className="hidden sm:block relative w-16 h-8 cursor-pointer">
        <input
          type="checkbox"
          className="hidden"
          checked={isDark}
          onChange={handleToggle}
          id="dark-mode-toggle"
        />
        <label
          htmlFor="dark-mode-toggle"
          className={`
            block w-full h-full rounded-full transition-colors duration-300
            ${isDark ? 'bg-indigo-600' : 'bg-gray-300'}
          `}
        >
          <span 
            className={`
              absolute w-6 h-6 rounded-full 
              bg-white shadow-md transition-all duration-300 ease-in-out
              flex items-center justify-center text-xl
              top-1
              ${isDark ? 'left-[calc(100%-1.75rem)]' : 'left-1'}
            `}
          >
            {isDark ? '🌙' : '☀️'}
          </span>
        </label>
      </div>

      {/* Mobile Button Toggle */}
      <button
        onClick={handleToggle}
        className="sm:hidden w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
        aria-label="Toggle dark mode"
      >
        {isDark ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-yellow-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-gray-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          </svg>
        )}
      </button>
    </div>
  );
};

export default DarkModeToggle; 