import banner from './../../../public/banner-video.svg';
import {
  BoxbuttonSlide,
  BoxVideo,
  ButtonsSlide,
  Container,
  ContainerBannerVideo,
  ContainerDescription,
  ContainerVideosDesktop,
  ContainerVideosMobile,
  Paragraph,
  Title,
} from './styles';

export const PorQueInovacci = () => {
  return (
    <Container>
      <Title>
        Entenda por que a Innovacci Academy
        <br />
        foi feita para você!
      </Title>
      <Paragraph>
        Confira aqui alguns trechos de nossas aulas e entenda porque nós somos a
        escola voltada para o mercado de alimentos <br />
        mais completa do Brasil! Por meio de metodologias ativas de ensino e com
        forte conteúdo teórico, fornecemos as ferramentas <br />
        certas para você se desenvolver como profissional da área de alimentos!
      </Paragraph>
      <ContainerBannerVideo>
        <img src={banner.src} alt="Vídeo" />
      </ContainerBannerVideo>
      <ContainerDescription>
        <Paragraph>
          Clique nas aulas abaixo e confira mais trechos que foram selecionados
          com todo o cuidado para te ajudar a chegar muito <br />
          mais longe.
        </Paragraph>
        <Paragraph>A mudança na sua carreira começa agora.</Paragraph>
      </ContainerDescription>
      <ContainerVideosDesktop>
        <BoxVideo></BoxVideo>
        <BoxVideo></BoxVideo>
        <BoxVideo></BoxVideo>
        <BoxVideo></BoxVideo>
        <BoxVideo></BoxVideo>
        <BoxVideo></BoxVideo>
        <BoxVideo></BoxVideo>
        <BoxVideo></BoxVideo>
      </ContainerVideosDesktop>
      <ContainerVideosMobile>
        <BoxVideo></BoxVideo>
        <BoxbuttonSlide>
          <ButtonsSlide></ButtonsSlide>
          <ButtonsSlide></ButtonsSlide>
          <ButtonsSlide></ButtonsSlide>
          <ButtonsSlide></ButtonsSlide>
        </BoxbuttonSlide>
      </ContainerVideosMobile>
    </Container>
  );
};
