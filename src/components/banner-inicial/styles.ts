import styled from 'styled-components';

interface ImageProps {
  imgUrl: string;
}

export const ContainerBannerInicial = styled.div`
  width: 100%;
  height: 971px;
  display: flex;
  flex-direction: row;
  padding: 128px 54.85px 0px 113px;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.colors.white};
  justify-content: space-evenly;

  @media only screen and (max-width: 890px) {
    padding: 121px 31px 70px 32px;
    box-sizing: border-box;
    height: 931px;
  }
`;

export const BoxTextsAndButton = styled.div`
  width: 564px;
  height: 100%;
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 890px) {
    width: 100%;
    align-items: center;
  }
`;

export const TitleColorPrimary = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  font-style: normal;
  font-weight: 700;
  font-size: 42px;
  line-height: 120%;

  @media only screen and (max-width: 890px) {
    font-size: 22px;
    text-align: center;
  }
`;

export const Paragrafo = styled.p`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.black};
  margin-top: 41px;
  display: block;
  font-weight: 300;
  line-height: 30px;

  @media only screen and (max-width: 890px) {
    font-size: 16px;
    text-align: center;
    margin-top: 40px;
  }
`;

export const BoxButton = styled.div`
  width: 285px;
  margin-top: 30px;

  @media only screen and (max-width: 890px) {
    font-size: 16px;
    text-align: center;
    margin-top: 40px;
  }
`;

export const Vector = styled.div<ImageProps>`
  width: 38.5%;
  height: 80%;
  border-radius: 16px;
  background: url(${(props) => props.imgUrl}) center center no-repeat;
  background-size: cover;
  @media only screen and (max-width: 1290px) {
    display: none;
  }

  @media only screen and (max-width: 1590px) {
    width: 50.5%;
  }
`;
