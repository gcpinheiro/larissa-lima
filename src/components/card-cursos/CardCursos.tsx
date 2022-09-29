import Image from 'next/image';

import blocked from './../../../public/blocked.svg';
import {
  ContainerCardCursos,
  BoxImage,
  BoxTitles,
  Title,
  NameTeacher,
  CursoPago,
} from './styledCursos';

interface CoursesProps {
  imageSrc?: string;
  flagNews?: boolean;
  title?: string;
  teachersName?: string;
  paidCourse: boolean;
}

const CardCursos = (props: CoursesProps) => {
  return props.paidCourse ? (
    <CursoPago>
      <Image src={blocked.src} width="100" height="100"></Image>
    </CursoPago>
  ) : (
    <ContainerCardCursos>
      <BoxImage img={props?.imageSrc}></BoxImage>
      <BoxTitles>
        <Title>{props.title}</Title>
        <NameTeacher>Prof. {props.teachersName}</NameTeacher>
      </BoxTitles>
    </ContainerCardCursos>
  );
};

export default CardCursos;
