import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Package, 
  DollarSign,
  UserCheck,
  Clock,
  Settings,
  Sun,
  Moon,
  ChevronRight,
  ChevronLeft
} from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', href: '/' },
  {
    label: 'Usuários',
    submenu: [
      { icon: UserCheck, label: 'Usuários Ativos', href: '/usuarios/ativos' },
      { icon: Clock, label: 'Usuários Pendentes', href: '/usuarios/pendentes' },
    ]
  },
  { icon: Package, label: 'Produtos', href: '/produtos' },
  { icon: DollarSign, label: 'Financeiro', href: '/financeiro' },
  { icon: Settings, label: 'Configurações', href: '/configuracoes' },
];

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const { isDark, toggleTheme } = useTheme();
  const location = useLocation();

  const isActive = (href: string) => location.pathname === href;

  return (
    <aside 
      className={`fixed md:relative bg-white dark:bg-gray-800 text-gray-800 dark:text-white shadow-lg 
        transition-all duration-300 h-screen z-50
        ${isExpanded ? 'w-64' : 'w-16'} 
        ${isExpanded ? 'translate-x-0' : '-translate-x-48 md:translate-x-0'}`}
    >
      <div className="flex items-center justify-between p-4 border-b dark:border-gray-700">
        <h2 className={`text-xl font-bold transition-opacity duration-300 
          ${isExpanded ? 'opacity-100' : 'opacity-0 md:opacity-100'}`}>
          Painel Admin
        </h2>
        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            title={isDark ? 'Modo Claro' : 'Modo Escuro'}
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors md:hidden"
            title={isExpanded ? 'Recolher' : 'Expandir'}
          >
            {isExpanded ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
          </button>
        </div>
      </div>
      
      <nav className="mt-6">
        <ul className="space-y-1 px-3">
          {menuItems.map((item, index) => (
            <li key={index}>
              {'submenu' in item ? (
                <div>
                  <div className={`px-3 py-2 text-sm font-medium text-gray-500 dark:text-gray-400
                    transition-opacity duration-300 ${isExpanded ? 'opacity-100' : 'opacity-0 md:opacity-100'}`}>
                    {item.label}
                  </div>
                  {item.submenu.map((subItem, subIndex) => (
                    <Link
                      key={subIndex}
                      to={subItem.href}
                      className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors
                        ${isActive(subItem.href)
                          ? 'bg-blue-50 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400'
                          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                        }`}
                    >
                      <subItem.icon size={20} />
                      <span className={`transition-opacity duration-300 
                        ${isExpanded ? 'opacity-100' : 'opacity-0 md:opacity-100'}`}>
                        {subItem.label}
                      </span>
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  to={item.href}
                  className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors
                    ${isActive(item.href)
                      ? 'bg-blue-50 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                    }`}
                >
                  <item.icon size={20} />
                  <span className={`transition-opacity duration-300 
                    ${isExpanded ? 'opacity-100' : 'opacity-0 md:opacity-100'}`}>
                    {item.label}
                  </span>
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;