import { ResponsePlanCourses } from '../../../utils/types/plan';
import { CardPlanos } from '../card-plans';
import {
  Container,
  TitleAndParagraph,
  Title,
  Paragraph,
  BoxCardsPlan,
  BoxPagamento,
  BoxCardPagamentos,
  CardPagamento,
  TitlePagamento,
} from './styles';

export const ComeceSuaJornada = () => {
  const mock: ResponsePlanCourses = {
    monthly: {
      offered: [
        'Aula semanal ao vivo',
        'Mais de 250 aulas gravas',
        'Caixa de ferramentas (aulas prática)',
        'Aula semana Ao Vivo',
        'Mais de 250 aulas gravadas',
      ],
      notOffered: [
        'Caixa de Ferramentas (aulas práticas)',
        'Transcrição e material de apoio',
      ],
    },

    yearly: {
      offered: [
        'Aula semanal ao vivo',
        'Mais de 250 aulas gravas',
        'Caixa de ferramentas (aulas prática)',
        'Aula semana Ao Vivo',
        'Mais de 250 aulas gravadas',
        'Caixa de Ferramentas (aulas práticas)',
        'Transcrição e material de apoio',
      ],
      notOffered: [],
    },
  };
  return (
    <Container>
      <TitleAndParagraph>
        <Title>Comece a sua jornada agora mesmo</Title>
        <Paragraph>
          Obtenha acesso imediato ao conteúdo mais completo sobre o mercado de
          alimentos, saúde, nutrição, legislação e muito mais!
        </Paragraph>
      </TitleAndParagraph>
      <BoxCardsPlan>
        <CardPlanos
          title="Mensal"
          price="89,90"
          label=""
          descriptionCourse={mock.monthly}
          melhor_opcao={false}
        ></CardPlanos>
        <CardPlanos
          title="Anual"
          price="69,90"
          label="Cobrado anualmente"
          melhor_opcao={true}
          descriptionCourse={mock.yearly}
        ></CardPlanos>
      </BoxCardsPlan>
      <BoxPagamento>
        <TitlePagamento>PAGAMENTO 100% SEGURO</TitlePagamento>
        <BoxCardPagamentos>
          <CardPagamento></CardPagamento>
          <CardPagamento></CardPagamento>
          <CardPagamento></CardPagamento>
          <CardPagamento></CardPagamento>
          <CardPagamento></CardPagamento>
          <CardPagamento></CardPagamento>
          <CardPagamento></CardPagamento>
        </BoxCardPagamentos>
      </BoxPagamento>
    </Container>
  );
};
