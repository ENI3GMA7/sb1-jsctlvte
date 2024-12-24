import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  VStack,
  Image,
  Text,
  HStack,
  useToast,
} from '@chakra-ui/react';
import { reviewUser } from '../services/api';

export default function UserReviewModal({ isOpen, onClose, user, onUserReviewed }) {
  const toast = useToast();

  const handleReview = async (approved) => {
    try {
      await reviewUser(user.id, approved);
      toast({
        title: 'Success',
        description: `User ${approved ? 'approved' : 'rejected'} successfully`,
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
      onUserReviewed(user.id);
      onClose();
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to review user',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Review User: {user.nome}</ModalHeader>
        <ModalBody>
          <VStack spacing={4} align="stretch">
            <HStack>
              <Image
                src={user.foto_perfil}
                alt="Profile"
                boxSize="100px"
                objectFit="cover"
                fallbackSrc="https://via.placeholder.com/100"
              />
              <Image
                src={user.foto_capa}
                alt="Cover"
                boxSize="100px"
                objectFit="cover"
                fallbackSrc="https://via.placeholder.com/100"
              />
            </HStack>
            
            <Text><strong>Email:</strong> {user.email}</Text>
            <Text><strong>Username:</strong> {user.username}</Text>
            <Text><strong>Type:</strong> {user.tipo}</Text>
            <Text><strong>Contact:</strong> {user.contacto}</Text>
            <Text><strong>Registration Date:</strong> {new Date(user.data_cadastro).toLocaleString()}</Text>
            <Text><strong>Pro Account:</strong> {user.conta_pro ? 'Yes' : 'No'}</Text>
            <Text><strong>Daily Post Limit:</strong> {user.limite_diario_publicacoes}</Text>
            <Text><strong>Unique ID:</strong> {user.identificador_unico}</Text>
          </VStack>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="red" mr={3} onClick={() => handleReview(false)}>
            Reject
          </Button>
          <Button colorScheme="green" onClick={() => handleReview(true)}>
            Approve
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}