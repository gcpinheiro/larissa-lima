import Button from '../button/Button';
import bannerOQueEstaEsperando from './../../../public/banner-o-que-esta-esperando.svg';
import {
  BoxButton,
  BoxVector,
  Container,
  Content,
  Paragraph,
  Title,
  BannerOQueEstaEsperando,
} from './styles';

export const OQueEstaEsperando = () => {
  return (
    <Container>
      <Content>
        <Title>Não perca tempo! O que você está esperando?</Title>
        <Paragraph>
          Somos mais de xx mil alunos. Em nossa comunidade você encontrará os
          profissionais mais qualificados do mercado e poderá trocar
          experiências e tirar dúvidas, além de criar um perfil profissional e
          oferecer seus serviços. Não existe oportunidade mais poderosa que
          esta!
        </Paragraph>
        <BoxButton>
          <Button>Acesse agora!</Button>
        </BoxButton>
      </Content>

      <BoxVector>
        <BannerOQueEstaEsperando
          src={bannerOQueEstaEsperando.src}
          alt="O que está esperando?"
        ></BannerOQueEstaEsperando>
      </BoxVector>
    </Container>
  );
};
