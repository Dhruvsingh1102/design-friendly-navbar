
import { Link } from "react-router-dom";
import { PenLine } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary shadow-md animate-slide-down">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-2 text-white hover:opacity-90 transition-opacity"
          >
            <PenLine size={24} />
            <span className="font-semibold text-lg">ExamPrep</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className="text-white hover:opacity-90 transition-opacity text-sm font-medium"
            >
              HOME
            </Link>
            <Link 
              to="/about" 
              className="text-white hover:opacity-90 transition-opacity text-sm font-medium"
            >
              ABOUT US
            </Link>
            <Link 
              to="/contact" 
              className="text-white hover:opacity-90 transition-opacity text-sm font-medium"
            >
              CONTACT US
            </Link>
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-4">
            <Link
              to="/register"
              className="bg-white text-primary px-6 py-2 rounded-md font-medium text-sm hover:bg-gray-100 transition-colors shadow-lg"
            >
              REGISTER
            </Link>
            <Link
              to="/login"
              className="bg-accent px-6 py-2 rounded-md text-white font-medium text-sm hover:bg-accent-hover transition-colors shadow-lg"
            >
              LOGIN
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
