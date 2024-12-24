import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import DashboardPage from './pages/DashboardPage';
import ActiveUsersPage from './pages/ActiveUsersPage';
import PendingUsersPage from './pages/PendingUsersPage';
import ProductsPage from './pages/ProductsPage';
import FinancialPage from './pages/FinancialPage';
import SettingsPage from './pages/SettingsPage';
import { ThemeProvider } from './contexts/ThemeContext';

const App = () => {
  return (
    <Router>
      <ThemeProvider>
        <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900">
          <Sidebar />
          <main className="flex-1 ml-16 md:ml-0">
            <Routes>
              <Route path="/" element={<DashboardPage />} />
              <Route path="/usuarios/ativos" element={<ActiveUsersPage />} />
              <Route path="/usuarios/pendentes" element={<PendingUsersPage />} />
              <Route path="/produtos" element={<ProductsPage />} />
              <Route path="/financeiro" element={<FinancialPage />} />
              <Route path="/configuracoes" element={<SettingsPage />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </Router>
  );
};

export default App;