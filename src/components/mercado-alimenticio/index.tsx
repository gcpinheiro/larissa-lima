import banner from './../../../public/banner-mercado-alimenticio.svg';
import {
  Container,
  ContainerBanner,
  ContainerDescription,
  ContainerDetail,
  Paragraph,
  Title,
  Iframe,
} from './styles';

export const MercadoAlimenticio = () => {
  return (
    <Container>
      <Title>Nossa localização</Title>

      <ContainerDescription>
        <Paragraph>
          Salinas Shopping Av. Washington Soares, 909 - Edson Queiroz, Fortaleza
          - CE, 60811-341
        </Paragraph>
      </ContainerDescription>

      <ContainerBanner>
        <Iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d995.3049130392251!2d-38.48188982769397!3d-3.762311011995778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c74582286dd3f1%3A0x12a3f1128f15118a!2sSalinas%20Shopping!5e0!3m2!1spt-BR!2sbr!4v1664414715365!5m2!1spt-BR!2sbr"
          width="600"
          height="450"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></Iframe>
      </ContainerBanner>

      <ContainerDetail>
        <Paragraph>
          Empresário, no mercado alimentício você pode encontrar profissionais
          que o seu negócio precisa para se desenvolver e <br />
          crescer. Consulte seus portfólios, análise depoimentos de clientes,
          veja a sua reputação e as entregas dos serviços.
        </Paragraph>
        <Paragraph>
          Profissional, nunca mais fique sem clientes e seja surpreendido pelo
          alcance da nossa comunidade. <br />
          Tenha acesso agora mesmo de forma prática, rápida e segura.
        </Paragraph>
      </ContainerDetail>
    </Container>
  );
};
