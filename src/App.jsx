import ButtonCounter from './components/ButtonCounter/ButtonCounter';
import Container from './components/Container/Container';
import Heading from './components/Heading/Heading';
import Section from './components/Section/Section';
import ObjectChanges from './components/ObjectChanges/ObjectChanges';
import ModalComponent from './components/Modal/ModalComponent';

export const App = () => {
  return (
    <Section>
      <Container>
        <Heading title="Practic by myself, 1 task" top bottom />

        <ButtonCounter />
        <Heading title="2 task" top bottom />
        <ObjectChanges />
        <Heading title="3 task" top bottom />
        <ModalComponent />
      </Container>
    </Section>
  );
};
