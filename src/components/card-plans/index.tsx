import { PropsPlansCourse } from '../../../utils/types/plan';
import close from './../../../public/close.svg';
import done from './../../../public/done.svg';
import {
  Container,
  BoxMelhorOpcao,
  BestChoice,
  BoxPrice,
  PlanDescription,
  Title,
  Price,
  Label,
  Enroll,
  BoxDescription,
  Icon,
  DescriptionText,
} from './styles';

export function CardPlanos(props: PropsPlansCourse) {
  return (
    <Container>
      <BoxMelhorOpcao>
        {props.melhor_opcao ? <BestChoice>Melhor opção</BestChoice> : null}
      </BoxMelhorOpcao>
      <BoxPrice>
        <Title>{props.title}</Title>
        <Price>R$ {props.price}</Price>
        <Label>{props.label}</Label>
      </BoxPrice>

      <PlanDescription>
        {props.descriptionCourse?.offered?.length > 0
          ? props.descriptionCourse.offered.map((el: any, index: number) => {
              return (
                <BoxDescription key={index}>
                  <Icon src={done.src}></Icon>
                  <DescriptionText typeTextPlan="none">{el}</DescriptionText>
                </BoxDescription>
              );
            })
          : null}
        {props.descriptionCourse?.notOffered?.length > 0
          ? props.descriptionCourse?.notOffered?.map(
              (el: any, index: number) => {
                return (
                  <BoxDescription key={index}>
                    <Icon src={close.src}></Icon>
                    <DescriptionText typeTextPlan="line-through">
                      {el}
                    </DescriptionText>
                  </BoxDescription>
                );
              }
            )
          : null}
      </PlanDescription>
      <Enroll>Matricule-se</Enroll>
    </Container>
  );
}
