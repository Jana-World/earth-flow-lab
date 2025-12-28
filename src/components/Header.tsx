import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";

interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Faculty", href: "/faculty" },
  {
    label: "People",
    href: "#",
    children: [
      { label: "Team", href: "/team" },
      { label: "Alumni", href: "/alumni" },
      { label: "Collaborations", href: "/collaborations" },
    ],
  },
  {
    label: "Work",
    href: "#",
    children: [
      { label: "Research", href: "/research" },
      { label: "Projects", href: "/projects" },
      { label: "Publications", href: "/publications" },
      { label: "Facilities", href: "/facilities" },
    ],
  },
  {
    label: "Media",
    href: "#",
    children: [
      { label: "News", href: "/news" },
      { label: "Blog", href: "/blog" },
      { label: "Gallery", href: "/gallery" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex-shrink-0">
            <h1 className="font-serif text-xl sm:text-2xl font-bold text-primary leading-tight">
              Geophysical Fluid Dynamics Laboratory
            </h1>
            <p className="text-xs sm:text-sm text-muted-foreground font-sans">
              Indian Institute of Technology (ISM), Dhanbad
            </p>
          </Link>

          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.children && setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                {item.children ? (
                  <span className="flex items-center px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors cursor-pointer">
                    {item.label}
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </span>
                ) : (
                  <Link
                    to={item.href}
                    className={`flex items-center px-4 py-2 text-sm font-medium transition-colors link-underline ${
                      isActive(item.href) ? "text-primary" : "text-foreground hover:text-primary"
                    }`}
                  >
                    {item.label}
                  </Link>
                )}

                <AnimatePresence>
                  {item.children && openDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 mt-1 w-48 bg-card rounded-lg shadow-lg border border-border overflow-hidden z-50"
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          to={child.href}
                          className={`block px-4 py-3 text-sm transition-colors ${
                            isActive(child.href)
                              ? "text-primary bg-secondary"
                              : "text-foreground hover:bg-secondary hover:text-primary"
                          }`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-md text-foreground hover:bg-secondary transition-colors"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-card border-t border-border overflow-hidden"
          >
            <nav className="px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <div key={item.label}>
                  {item.children ? (
                    <span className="block px-4 py-2 text-base font-medium text-foreground">
                      {item.label}
                    </span>
                  ) : (
                    <Link
                      to={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-4 py-2 text-base font-medium text-foreground hover:text-primary hover:bg-secondary rounded-md transition-colors"
                    >
                      {item.label}
                    </Link>
                  )}
                  {item.children && (
                    <div className="ml-4 mt-1 space-y-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          to={child.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block px-4 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-secondary rounded-md transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
