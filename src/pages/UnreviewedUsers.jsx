import { useState, useEffect } from 'react';
import { Box, Text, Spinner, useToast } from '@chakra-ui/react';
import { fetchUnreviewedUsers } from '../services/api';
import UnreviewedUserTable from '../components/UnreviewedUserTable';

export default function UnreviewedUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const toast = useToast();

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    try {
      setLoading(true);
      const data = await fetchUnreviewedUsers();
      setUsers(data);
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to load unreviewed users',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    } finally {
      setLoading(false);
    }
  };

  const handleUserReviewed = (userId) => {
    setUsers(users.filter(user => user.id !== userId));
  };

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minH="400px">
        <Spinner size="xl" />
      </Box>
    );
  }

  return (
    <Box>
      <Text fontSize="2xl" fontWeight="bold" mb={6}>
        Unreviewed Users
      </Text>
      
      <Box overflowX="auto">
        <UnreviewedUserTable users={users} onUserReviewed={handleUserReviewed} />
      </Box>
    </Box>
  );
}