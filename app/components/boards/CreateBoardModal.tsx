import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";

type TProps = {
  isOpen: boolean;
  onClose: () => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSave: () => void;
};

const CreateBoardModal: React.FC<TProps> = ({
  isOpen,
  onClose,
  onChange,
  onSave,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>ボードを作成</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Input placeholder="ボードを入力" onChange={(e) => onChange(e)} />
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" onClick={onSave}>
            保存
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default CreateBoardModal;
