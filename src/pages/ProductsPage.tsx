import React from 'react';
import { Package, Plus } from 'lucide-react';

const ProductsPage = () => {
  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <Package className="w-8 h-8 text-blue-600 dark:text-blue-400" />
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Produtos</h1>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          <Plus size={20} />
          Novo Produto
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Exemplo de produto */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
          <img
            src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
            alt="Produto"
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Fones de Ouvido</h3>
          <p className="text-gray-500 dark:text-gray-400 text-sm mb-2">Wireless com cancelamento de ruído</p>
          <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">R$ 299,90</p>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;