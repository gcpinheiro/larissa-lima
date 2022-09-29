import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 671px;
  display: flex;
  flex-direction: row;
  padding: 128px 54.85px 131px 113px;
  box-sizing: border-box;
  background-color: #ebf3fa;

  @media only screen and (max-width: 1220px) {
    flex-direction: column-reverse;
    padding: 54px 36px 0 35px;
    height: 781px;
  }
`;

export const Content = styled.div`
  width: 564px;
  height: 100%;
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 1220px) {
    align-items: center;
    width: 100%;
    margin-bottom: 56px;
  }
`;

export const Title = styled.h1`
  color: #2b1e69;
  font-style: normal;
  font-weight: 700;
  font-size: 42px;
  line-height: 120%;

  @media only screen and (max-width: 1220px) {
    font-size: 22px;
    text-align: center;
  }
`;

export const Paragraph = styled.p`
  font-size: 20px;
  color: #0e0b20;
  margin-top: 41px;
  display: block;
  width: 544px;
  line-height: 30px;
  width: 100%;

  @media only screen and (max-width: 1220px) {
    font-size: 16px;
    text-align: center;
  }
`;

export const BoxButton = styled.div`
  width: 285px;
  margin-top: 46px;
  @media only screen and (max-width: 390px) {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
`;

export const BoxVector = styled.div`
  margin-top: 45px;

  @media only screen and (max-width: 390px) {
    margin: 54px 0;
  }
`;

export const BannerOQueEstaEsperando = styled.img`
  width: 100%;
`;
