import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
  useDisclosure,
} from '@chakra-ui/react';
import UserReviewModal from './UserReviewModal';
import { useState } from 'react';

export default function UnreviewedUserTable({ users, onUserReviewed }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedUser, setSelectedUser] = useState(null);

  const handleReviewClick = (user) => {
    setSelectedUser(user);
    onOpen();
  };

  return (
    <>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>ID</Th>
            <Th>Name</Th>
            <Th>Email</Th>
            <Th>Username</Th>
            <Th>Type</Th>
            <Th>Registration Date</Th>
            <Th>Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {users.map((user) => (
            <Tr key={user.id}>
              <Td>{user.id}</Td>
              <Td>{user.nome}</Td>
              <Td>{user.email}</Td>
              <Td>{user.username}</Td>
              <Td>{user.tipo}</Td>
              <Td>{new Date(user.data_cadastro).toLocaleDateString()}</Td>
              <Td>
                <Button
                  colorScheme="blue"
                  size="sm"
                  onClick={() => handleReviewClick(user)}
                >
                  Review
                </Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>

      {selectedUser && (
        <UserReviewModal
          isOpen={isOpen}
          onClose={onClose}
          user={selectedUser}
          onUserReviewed={onUserReviewed}
        />
      )}
    </>
  );
}