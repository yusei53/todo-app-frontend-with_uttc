import { Container } from "@chakra-ui/react";

const Main = ({ children }: { children: React.ReactNode }) => {
  return (
    <Container as="main" maxW="container.lg">
      {children}
    </Container>
  );
};

export default Main;