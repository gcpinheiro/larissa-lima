import {
  ContainerBannerInformativo,
  RowInformations,
  BoxInformation,
  TitleInformativo,
  TextoInformativo,
} from './styles';

const BannerInformativo = () => {
  return (
    <ContainerBannerInformativo>
      <RowInformations>
        <BoxInformation>
          <TitleInformativo>+ 200h</TitleInformativo>
          <TextoInformativo>
            Mais de xx trilhas de conhecimento disponíveis para você!
          </TextoInformativo>
        </BoxInformation>

        <BoxInformation>
          <TitleInformativo>+ 200h</TitleInformativo>
          <TextoInformativo>
            O melhor custo-benefício do mercado.
          </TextoInformativo>
        </BoxInformation>

        <BoxInformation>
          <TitleInformativo>+ 200h</TitleInformativo>
          <TextoInformativo>Aulas toda a semana.</TextoInformativo>
        </BoxInformation>
      </RowInformations>

      <RowInformations>
        <BoxInformation>
          <TitleInformativo>+ 200h</TitleInformativo>
          <TextoInformativo>
            Nossas metodologias ativas promovem a ativação do conhecimento por
            meio de transcrições e exercícios práticos.
          </TextoInformativo>
        </BoxInformation>

        <BoxInformation>
          <TitleInformativo>+ 200h</TitleInformativo>
          <TextoInformativo>
            O melhor custo-benefício do mercado.
          </TextoInformativo>
        </BoxInformation>

        <BoxInformation>
          <TitleInformativo>7 dias grátis</TitleInformativo>
          <TextoInformativo>Acesse agora sem compromisso!</TextoInformativo>
        </BoxInformation>
      </RowInformations>
    </ContainerBannerInformativo>
  );
};

export default BannerInformativo;
