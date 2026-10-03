import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface ThemeToggleProps {
  className?: string;
  showLabel?: boolean;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ className = '', showLabel = false }) => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      id="theme-toggle-btn"
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className={`group relative inline-flex items-center justify-center gap-2 rounded-xl transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00E5D4] ${
        showLabel
          ? 'w-full px-4 py-3 bg-[#002D32]/40 hover:bg-[#002D32]/70 text-gray-200 border border-[#002D32]'
          : 'w-10 h-10 p-2 bg-[#002D32]/40 hover:bg-[#002D32]/80 text-gray-300 hover:text-white border border-[#002D32] hover:border-[#00E5D4]/50'
      } ${className}`}
    >
      <div className="relative w-5 h-5 flex items-center justify-center">
        {isDark ? (
          <Sun
            size={18}
            className="text-amber-400 group-hover:text-amber-300 transform group-hover:rotate-45 transition-transform duration-500"
          />
        ) : (
          <Moon
            size={18}
            className="text-indigo-600 dark:text-gray-300 group-hover:-rotate-12 transition-transform duration-500"
          />
        )}
      </div>

      {showLabel && (
        <span className="text-sm font-semibold tracking-wide">
          {isDark ? 'Light Mode' : 'Dark Mode'}
        </span>
      )}
    </button>
  );
};
