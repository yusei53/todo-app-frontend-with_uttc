import {
  Button,
  Text,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@chakra-ui/react";

type TProps = {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  onClick: () => void;
};

const DeleteModal: React.FC<TProps> = ({ title, isOpen, onClose, onClick }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalContent>
        <ModalHeader>{title}の削除</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text fontWeight="bold">本当に削除しますか？</Text>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" onClick={onClick}>
            削除
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default DeleteModal;
