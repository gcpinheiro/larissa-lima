import styled from 'styled-components';

import Button from '../button/Button';

export const ContainerNossosCursos = styled.div`
  width: 100%;
  height: 1088px;
  display: flex;
  flex-direction: column;
  padding: 120px 54.85px 129px 113px;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.colors.secondary};

  @media only screen and (max-width: 890px) {
    padding: 54px 31px 66px 31px;
    box-sizing: border-box;
    height: 1081px;
  }
`;

export const Title = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 42px;
  line-height: 63px;
  width: 926px;
  color: ${({ theme }) => theme.colors.white};

  @media only screen and (max-width: 1200px) {
    font-size: 20px;
    line-height: 120%;
    text-align: center;
    width: 100%;
  }
`;

export const Paragrafo = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  color: ${({ theme }) => theme.colors.white};
  margin-top: 18px;
  display: block;
  width: 1147px;

  @media only screen and (max-width: 1200px) {
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    width: 100%;
  }
`;

export const BoxSlide = styled.div`
  width: 100%;
  height: 502px;
  display: flex;
  flex-direction: column;
`;

export const BoxCards = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const BoxbuttonSlide = styled.div`
  width: 100%;
  margin-top: 46px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ButtonsSlide = styled.button`
  border-radius: 100%;
  margin-right: 9px;
  width: 14px;
  height: 14px;
  border: none;
  cursor: pointer;
`;

export const BoxButtonListaCompleta = styled.div`
  width: 100%;
  height: 62px;
  margin-top: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ButtonListCompleta = styled(Button)`
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.secondary};
  width: 310px;
`;

export const BoxCardsDesktop = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media only screen and (max-width: 1200px) {
    display: none;
    overflow: hidden;
  }

  @media only screen and (min-width: 1200px) {
    display: flex;
  }
`;

export const BoxCardsMobile = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  @media only screen and (max-width: 1200px) {
    display: flex;
  }

  @media only screen and (min-width: 1200px) {
    display: none;
  }
`;
