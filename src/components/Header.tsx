import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Menu, X, User, LogIn, Heart } from "lucide-react";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery("");
      setIsMenuOpen(false);
    }
  };

  const handleHeartClick = () => {
    // Navigate to heartinn page
    window.location.href = "/heartinn";
  };

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">R</span>
            </div>
            <span className="text-xl font-bold text-primary">RealtyHub</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              Buy
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              Rent
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              Sell
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              About
            </a>
          </nav>

          {/* Search Bar - Desktop */}
          <div className="hidden lg:flex items-center flex-1 max-w-md mx-8 relative">
            <form onSubmit={handleSearch} className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search house, apartment, villa, land..."
                className="search-input pl-10 pr-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button
                type="button"
                onClick={handleHeartClick}
                aria-label="Favorites"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Heart className="w-5 h-5" />
              </button>
            </form>
          </div>

          {/* Auth Buttons - Desktop */}
          <div className="hidden md:flex items-center space-x-3">
            <Button variant="ghost" size="sm" className="text-foreground">
              <LogIn className="w-4 h-4 mr-2" />
              Login
            </Button>
            <Button size="sm" className="hero-button">
              <User className="w-4 h-4 mr-2" />
              Register
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className={cn(
          "md:hidden overflow-hidden transition-all duration-300 ease-smooth",
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}>
          <div className="py-4 space-y-4">
            {/* Mobile Search */}
            <form onSubmit={handleSearch} className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search house, apartment, villa, land..."
                className="search-input pl-10 pr-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button
                type="button"
                onClick={handleHeartClick}
                aria-label="Favorites"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Heart className="w-5 h-5" />
              </button>
            </form>

            {/* Mobile Navigation */}
            <nav className="flex flex-col space-y-3">
              <a href="#" className="text-foreground hover:text-primary transition-colors py-2">
                Buy
              </a>
              <a href="#" className="text-foreground hover:text-primary transition-colors py-2">
                Rent
              </a>
              <a href="#" className="text-foreground hover:text-primary transition-colors py-2">
                Sell
              </a>
              <a href="#" className="text-foreground hover:text-primary transition-colors py-2">
                About
              </a>
            </nav>

            {/* Mobile Auth */}
            <div className="flex flex-col space-y-2 pt-4 border-t border-border">
              <Button variant="ghost" className="justify-start">
                <LogIn className="w-4 h-4 mr-2" />
                Login
              </Button>
              <Button className="hero-button justify-start">
                <User className="w-4 h-4 mr-2" />
                Register
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
