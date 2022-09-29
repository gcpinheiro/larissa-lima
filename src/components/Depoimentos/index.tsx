import picture from './../../../public/author-comment-picture.svg';
import butterfly from './../../../public/butterfly.svg';
import larissa from './../../../public/larissa.jpeg';
import {
  Container,
  Content,
  Description,
  Header,
  Title,
  Comment,
  Message,
  Author,
  BoxbuttonSlide,
  ButtonsSlide,
  Butterfly,
  ImagePerfil,
} from './styles';

export const Depoimentos = () => {
  return (
    <Container>
      <Header>
        <Butterfly src={butterfly.src} alt="Depoimentos" width="124px" />
        <Title>Psicóloga Larissa Lima</Title>
      </Header>
      <Description>
        Consectetur tortor elementum aenean gravida volutpat aliquam morbi.Ut
        nullam vitae dolor vestibulum mollis quis bibendum venenatis. Amet,
        purus consectetur massa rhoncus. Nibh tincidunt turpis etiam viverra
        mattis viverra.
      </Description>
      <Content>
        <ImagePerfil imgUrl={larissa.src} />
        <Comment>
          <Author>Larissa Lima</Author>
          <Message>
            Consectetur tortor elementum aenean gravida volutpat <br />
            aliquam morbi.Ut nullam vitae dolor vestibulum mollis <br />
            quis bibendum venenatis. Amet, purus consectetur massa <br />
            rhoncus. Nibh tincidunt turpis etiam viverra mattis viverra.
          </Message>
        </Comment>
      </Content>
      {/* <BoxbuttonSlide>
        <ButtonsSlide></ButtonsSlide>
        <ButtonsSlide></ButtonsSlide>
        <ButtonsSlide></ButtonsSlide>
        <ButtonsSlide></ButtonsSlide>
      </BoxbuttonSlide> */}
    </Container>
  );
};
