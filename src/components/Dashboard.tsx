import React from 'react';
import { Users, Package, DollarSign, TrendingUp } from 'lucide-react';
import StatCard from './StatCard';

const Dashboard = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Visão Geral</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total de Usuários"
          value="1.234"
          icon={Users}
          trend={{ value: 12, isPositive: true }}
        />
        <StatCard
          title="Total de Produtos"
          value="856"
          icon={Package}
          trend={{ value: 8, isPositive: true }}
        />
        <StatCard
          title="Saldo Total"
          value="R$ 45.678"
          icon={DollarSign}
          trend={{ value: 15, isPositive: true }}
        />
        <StatCard
          title="Lucro Total"
          value="R$ 12.345"
          icon={TrendingUp}
          trend={{ value: 5, isPositive: true }}
        />
      </div>
    </div>
  );
};

export default Dashboard;