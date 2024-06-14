import { Overlay, Container, Spinner } from './styles';

export const LoadingSpinner = () => {
  return (
    <Overlay>
      <Container>
        <Spinner />
      </Container>
    </Overlay>
  );
}
