import { Link, useLocation } from 'react-router-dom';
import { NAV_LINKS } from '../constants';

export default function MobileBottomNav() {
  const location = useLocation();

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-[60] px-4 pb-4">
      <div className="bg-brand-bg/80 backdrop-blur-xl border border-white/10 rounded-[2rem] shadow-2xl flex items-center justify-around p-2">
        {NAV_LINKS.filter(link => link.label !== 'Blog').map((link) => {
          const Icon = link.icon;
          const isActive = location.pathname === link.path;
          
          return (
            <Link
              key={link.path}
              to={link.path}
              className={`flex flex-col items-center justify-center min-w-[60px] py-2 transition-all duration-300 relative ${
                isActive ? 'text-brand-primary' : 'text-gray-500'
              }`}
            >
              <div className={`p-2 rounded-2xl transition-all duration-300 ${
                isActive ? 'bg-brand-primary/10' : 'bg-transparent'
              }`}>
                <Icon 
                  size={20} 
                  strokeWidth={isActive ? 2.5 : 2} 
                  className={isActive ? 'scale-110' : 'scale-100'}
                />
              </div>
              <span className={`text-[9px] font-bold mt-0.5 tracking-tighter uppercase transition-opacity duration-300 ${
                isActive ? 'opacity-100' : 'opacity-60'
              }`}>
                {link.label.split(' ')[0]}
              </span>
              
              {isActive && (
                <div className="absolute -bottom-1 w-1 h-1 bg-brand-primary rounded-full" />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
