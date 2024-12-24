import React, { useState } from 'react';
import { UserCheck, Loader } from 'lucide-react';
import { useUsers } from '../hooks/useUsers';
import Pagination from '../components/Pagination';

const ActiveUsersPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 10;
  const { users, loading, error, totalUsers } = useUsers(currentPage, perPage);
  const totalPages = Math.ceil(totalUsers / perPage);

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value);
  };

  if (error) {
    return (
      <div className="p-6">
        <div className="bg-red-50 dark:bg-red-900/50 text-red-600 dark:text-red-400 p-4 rounded-lg">
          {error}
        </div>
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="flex items-center gap-3 mb-6">
        <UserCheck className="w-8 h-8 text-blue-600 dark:text-blue-400" />
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Usuários</h1>
      </div>
      
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md">
        <div className="p-4 overflow-x-auto">
          {loading ? (
            <div className="flex items-center justify-center py-8">
              <Loader className="w-8 h-8 text-blue-600 dark:text-blue-400 animate-spin" />
            </div>
          ) : (
            <>
              <table className="w-full min-w-[800px]">
                <thead>
                  <tr className="text-left text-gray-500 dark:text-gray-400">
                    <th className="p-3">ID</th>
                    <th className="p-3">Nome</th>
                    <th className="p-3">Email</th>
                    <th className="p-3 text-right">Total Produtos</th>
                    <th className="p-3 text-right">Saldo</th>
                  </tr>
                </thead>
                <tbody>
                  {users?.map((user) => (
                    <tr key={user.id} className="border-t dark:border-gray-700">
                      <td className="p-3 font-mono text-sm">{user.id}</td>
                      <td className="p-3">{user.nome}</td>
                      <td className="p-3">{user.email}</td>
                      <td className="p-3 text-right">
                        <span className="inline-flex items-center justify-center px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full text-sm">
                          {user.total_produtos}
                        </span>
                      </td>
                      <td className="p-3 text-right font-medium">
                        <span className={`${user.saldo >= 0 ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                          {formatCurrency(user.saldo)}
                        </span>
                      </td>
                    </tr>
                  ))}
                  {!loading && (!users || users.length === 0) && (
                    <tr>
                      <td colSpan={5} className="p-4 text-center text-gray-500 dark:text-gray-400">
                        Nenhum usuário encontrado
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
              
              {totalPages > 0 && (
                <div className="mt-4">
                  <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={setCurrentPage}
                  />
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ActiveUsersPage;