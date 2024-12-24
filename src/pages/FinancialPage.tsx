import React from 'react';
import { DollarSign, TrendingUp, TrendingDown } from 'lucide-react';

const FinancialPage = () => {
  return (
    <div className="p-6">
      <div className="flex items-center gap-3 mb-6">
        <DollarSign className="w-8 h-8 text-blue-600 dark:text-blue-400" />
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Financeiro</h1>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h3 className="text-gray-500 dark:text-gray-400">Receita Total</h3>
          <p className="text-3xl font-bold text-gray-800 dark:text-white mt-2">R$ 45.678,90</p>
          <div className="flex items-center gap-2 mt-2 text-green-500">
            <TrendingUp size={20} />
            <span>+15% este mês</span>
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h3 className="text-gray-500 dark:text-gray-400">Despesas</h3>
          <p className="text-3xl font-bold text-gray-800 dark:text-white mt-2">R$ 12.345,67</p>
          <div className="flex items-center gap-2 mt-2 text-red-500">
            <TrendingDown size={20} />
            <span>-5% este mês</span>
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h3 className="text-gray-500 dark:text-gray-400">Lucro Líquido</h3>
          <p className="text-3xl font-bold text-gray-800 dark:text-white mt-2">R$ 33.333,23</p>
          <div className="flex items-center gap-2 mt-2 text-green-500">
            <TrendingUp size={20} />
            <span>+20% este mês</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancialPage;