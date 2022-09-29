import CardCursos from '../card-cursos/CardCursos';
import {
  BoxbuttonSlide,
  ButtonsSlide,
  Container,
  ContainerDesktop,
  ContainerMobile,
  Title,
} from './styles';

export const CursosPagos = () => {
  const courses = Array.from(Array(8)).map((item, i) => {
    return <CardCursos key={i} paidCourse={true} />;
  });

  return (
    <Container>
      <Title>O melhor custo-benefício do mercado</Title>
      <ContainerDesktop>{courses}</ContainerDesktop>
      <ContainerMobile>
        <CardCursos paidCourse={true} />
        <BoxbuttonSlide>
          <ButtonsSlide></ButtonsSlide>
          <ButtonsSlide></ButtonsSlide>
          <ButtonsSlide></ButtonsSlide>
          <ButtonsSlide></ButtonsSlide>
        </BoxbuttonSlide>
      </ContainerMobile>
    </Container>
  );
};
