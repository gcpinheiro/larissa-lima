import { useState } from 'react';

import CardCursos from '../card-cursos/CardCursos';
import {
  ContainerNossosCursos,
  Title,
  Paragrafo,
  BoxSlide,
  BoxCards,
  BoxbuttonSlide,
  BoxButtonListaCompleta,
  ButtonsSlide,
  ButtonListCompleta,
  BoxCardsDesktop,
  BoxCardsMobile,
} from './styles';

const NossosCursos = () => {
  const [index, setIndex] = useState(0);

  const mock = [
    {
      imageSrc: 'https://i.ibb.co/BqcVBjJ/bpf.jpg',
      flagNews: false,
      title: 'Boas práticas de fabricação',
      teachersName: 'Gabriel Castro',
      paidCourse: false,
    },
    {
      imageSrc: 'https://i.ibb.co/jWF3Mj1/rotulo.jpg',
      flagNews: false,
      title: 'Rotulagem nutricional',
      teachersName: 'Marcos Pereira',
      paidCourse: false,
    },
    {
      imageSrc: 'https://i.ibb.co/Z1rK1Qt/microbiologia.jpg',
      flagNews: false,
      title: 'Análise de alimentos',
      teachersName: 'Ingrid Araújo',
      paidCourse: false,
    },
    {
      imageSrc: 'https://i.ibb.co/CvWKgGZ/bombas.png',
      flagNews: false,
      title: 'Dimensionamento de bombas',
      teachersName: 'Rafael Zambelli',
      paidCourse: false,
    },
  ];

  const listCards = mock.map((item, i) => {
    return (
      <CardCursos
        key={i}
        imageSrc={item.imageSrc}
        paidCourse={item.paidCourse}
        title={item.title}
        teachersName={item.teachersName}
      ></CardCursos>
    );
  });
  return (
    <ContainerNossosCursos>
      <Title>
        A escola que você precisa para se diferenciar no mercado de trabalho!
      </Title>
      <Paragrafo>
        São xx professores, divididos em mais de xx aulas que foram
        desenvolvidas para atender as principais necessidades dos profissionais
        do mercado de alimentos. Você precisa de mais qualificação? Entender
        sobre legislação? Melhorar a sua carreira? Quer ampliar a sua atuação
        profissional? Temos a solução perfeita para você!
      </Paragrafo>
      <BoxSlide>
        <BoxCards>
          <BoxCardsDesktop>{listCards}</BoxCardsDesktop>
          <BoxCardsMobile>
            <CardCursos
              imageSrc={mock[index].imageSrc}
              paidCourse={mock[index].paidCourse}
              title={mock[index].title}
              teachersName={mock[index].teachersName}
            ></CardCursos>
          </BoxCardsMobile>
        </BoxCards>
        <BoxbuttonSlide>
          <ButtonsSlide
            onClick={() => {
              setIndex(0);
            }}
          ></ButtonsSlide>
          <ButtonsSlide
            onClick={() => {
              setIndex(1);
            }}
          ></ButtonsSlide>
          <ButtonsSlide
            onClick={() => {
              setIndex(2);
            }}
          ></ButtonsSlide>
          <ButtonsSlide
            onClick={() => {
              setIndex(3);
            }}
          ></ButtonsSlide>
        </BoxbuttonSlide>
      </BoxSlide>
      <BoxButtonListaCompleta>
        <ButtonListCompleta>Lista Completa</ButtonListCompleta>
      </BoxButtonListaCompleta>
    </ContainerNossosCursos>
  );
};

export default NossosCursos;
