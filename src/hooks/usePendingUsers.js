import { useState, useEffect } from 'react';

export const usePendingUsers = (page = 1, perPage = 10) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [totalUsers, setTotalUsers] = useState(0);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://skyvendamz.up.railway.app/admin/usuarios/pendentes/?page=${page}&per_page=${perPage}`,
          {
            headers: {
              'accept': 'application/json'
            }
          }
        );

        if (!response.ok) {
          throw new Error('Falha ao carregar usuários pendentes');
        }

        const data = await response.json();
        setUsers(data.items);
        setTotalUsers(data.total);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Erro ao carregar usuários pendentes');
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, [page, perPage]);

  return { users, loading, error, totalUsers };
};