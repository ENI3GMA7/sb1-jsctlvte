import React, { useState } from 'react';
import { Clock, Loader } from 'lucide-react';
import { usePendingUsers } from '../hooks/usePendingUsers';
import Pagination from '../components/Pagination';

const PendingUsersPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 10;
  const { users, loading, error, totalUsers } = usePendingUsers(currentPage, perPage);
  const totalPages = Math.ceil(totalUsers / perPage);

  const formatDate = (dateString?: string) => {
    if (!dateString) return 'N/A';
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('pt-BR', {
      dateStyle: 'short',
      timeStyle: 'short'
    }).format(date);
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
        <Clock className="w-8 h-8 text-blue-600 dark:text-blue-400" />
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Usuários Pendentes</h1>
      </div>
      
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md">
        <div className="p-4">
          {loading ? (
            <div className="flex items-center justify-center py-8">
              <Loader className="w-8 h-8 text-blue-600 dark:text-blue-400 animate-spin" />
            </div>
          ) : (
            <>
              <table className="w-full">
                <thead>
                  <tr className="text-left text-gray-500 dark:text-gray-400">
                    <th className="p-3">Nome</th>
                    <th className="p-3">Email</th>
                    <th className="p-3">Status</th>
                    <th className="p-3">Data de Registro</th>
                  </tr>
                </thead>
                <tbody>
                  {users?.map((user) => (
                    <tr key={user.id} className="border-t dark:border-gray-700">
                      <td className="p-3">{user.nome}</td>
                      <td className="p-3">{user.email}</td>
                      <td className="p-3">
                        <span className="px-2 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-600 dark:text-yellow-400 rounded-full text-sm">
                          Pendente
                        </span>
                      </td>
                      <td className="p-3">{formatDate(user.data_registro)}</td>
                    </tr>
                  ))}
                  {!loading && (!users || users.length === 0) && (
                    <tr>
                      <td colSpan={4} className="p-4 text-center text-gray-500 dark:text-gray-400">
                        Nenhum usuário pendente encontrado
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
              
              {totalPages > 0 && (
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={setCurrentPage}
                />
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default PendingUsersPage;