import { useState, useEffect } from 'react';
import { User, ApiResponse } from '../types/api';

export const useUsers = (page: number = 1, perPage: number = 10) => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [totalUsers, setTotalUsers] = useState(0);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://skyvendamz.up.railway.app/admin/usuarios/?page=${page}&per_page=${perPage}`,
          {
            headers: {
              'accept': 'application/json'
            }
          }
        );

        if (!response.ok) {
          throw new Error('Falha ao carregar usuários');
        }

        const data: ApiResponse = await response.json();
        setUsers(data.items);
        setTotalUsers(data.total);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Erro ao carregar usuários');
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, [page, perPage]);

  return { users, loading, error, totalUsers };
};