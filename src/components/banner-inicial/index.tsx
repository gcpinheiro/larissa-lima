import Button from '../button/Button';
import sala from './../../../public/sala.jpeg';
import {
  ContainerBannerInicial,
  BoxTextsAndButton,
  TitleColorPrimary,
  Paragrafo,
  BoxButton,
  Vector,
} from './styles';

const BannerInicial = () => {
  return (
    <ContainerBannerInicial id="tcc">
      <BoxTextsAndButton>
        <TitleColorPrimary>
          Afinal, como funciona a psicoterapia?
        </TitleColorPrimary>
        <Paragrafo>
          A psicoterapia é um método de tratamento, uma aplicação dos
          conhecimentos da Psicologia na clínica. A busca pelo psicólogo pode
          ocorrer por diversas razões, elas muitas vezes podem ser parecidas,
          mas a demanda de cada paciente é única. Somos seres biopsicossociais,
          ou seja, somos o conjunto de nossa herança genética, de nossa dimensão
          psíquica e do contexto (ambiental, econômico, social) em que estamos
          inseridos, portanto, cada um experiencia os acontecimentos de uma
          forma bastante singular. Por esses motivo,os processos psicoterápicos
          também são singulares, e variam em duração, e na direção escolhida
          para o tratamento, de acordo com o objetivo proposto no trabalho.
        </Paragrafo>
        <BoxButton>
          <Button>Agendar sessão</Button>
        </BoxButton>
      </BoxTextsAndButton>
      <Vector imgUrl={sala.src}></Vector>
    </ContainerBannerInicial>
  );
};

export default BannerInicial;
