import { Link } from "react-router-dom";
import { User, Code, Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";
import { useTheme } from "./ThemeProvider";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/80 backdrop-blur-md shadow-md' : 'bg-transparent'
    }`}>
      <div className={`max-w-7xl mx-auto px-10 py-[15px] flex items-center justify-between ${
        isScrolled ? 'px-10' : 'px-10'
      }`}>
        <div className="bg-background/90 backdrop-blur-sm rounded-2xl px-6 py-3 shadow-sm">
          <Link to="/" className="flex items-center gap-2 font-bold text-2xl text-primary tracking-tight logo-font">
            <Code size={28} className="text-primary" />
            Landing<span className="text-primary">Page</span>Pro
          </Link>
        </div>
        <nav className="flex gap-8 text-base font-medium items-center">
          <div className="bg-background/90 backdrop-blur-sm rounded-2xl px-6 py-3 shadow-sm">
            <Link to="/dashboard" className="text-foreground hover:text-primary transition-colors">
              Dashboard
            </Link>
          </div>
          <div className="bg-background/90 backdrop-blur-sm rounded-2xl px-6 py-3 shadow-sm">
            <Link to="/pricing" className="text-foreground hover:text-primary transition-colors">
              Pricing
            </Link>
          </div>
          <button
            onClick={toggleTheme}
            className="bg-background/90 backdrop-blur-sm rounded-2xl p-3 shadow-sm hover:bg-background/80 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <Moon size={20} className="text-primary" /> : <Sun size={20} className="text-primary" />}
          </button>
          {/* Simulated "avatar" dropdown — replace with user/auth logic when available */}
          <div className="flex items-center gap-2 bg-background/90 backdrop-blur-sm px-6 py-3 rounded-2xl shadow-sm text-foreground">
            <User size={20} />
            <span>Demo User</span>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
