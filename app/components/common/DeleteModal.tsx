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
  boardTitle: string;
  isOpen: boolean;
  onClose: () => void;
  onSave: () => void;
};

const DeleteModal: React.FC<TProps> = ({
  boardTitle,
  isOpen,
  onClose,
  onSave,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalContent>
        <ModalHeader>{boardTitle}の削除</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text fontWeight="bold">本当に削除しますか？</Text>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" onClick={onSave}>
            削除
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default DeleteModal;
