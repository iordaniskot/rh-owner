import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
    { path: '/login', label: 'Login' },
    { path: '/showcase', label: 'Colors' },
  ];

  return (
    <nav className="fixed top-16 left-4 z-50 bg-surface/80 backdrop-blur-sm border border-primary/20 rounded-lg p-4 shadow-lg">
      <div className="flex flex-col gap-2">
        {navItems.map(({ path, label }) => (
          <Link
            key={path}
            to={path}
            className={`px-3 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
              location.pathname === path
                ? 'bg-primary text-primary-foreground'
                : 'text-foreground hover:bg-secondary/20 hover:text-primary'
            }`}
          >
            {label}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;
