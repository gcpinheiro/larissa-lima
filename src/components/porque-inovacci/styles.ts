import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 111px 251px 251px 251px;
  box-sizing: border-box;
  background-color: #ebf3fa;

  @media only screen and (max-width: 890px) {
    padding: 70px 31px;
  }
`;

export const Title = styled.h2`
  font-weight: 700;
  font-size: 42px;
  color: #2b1e69;
  margin-bottom: 30px;

  @media only screen and (max-width: 890px) {
    font-weight: 700;
    font-size: 22px;
    line-height: 120%;
  }
`;

export const Paragraph = styled.p`
  font-size: 18px;
  color: #0e0b20;
  line-height: 27px;

  @media only screen and (max-width: 890px) {
    font-size: 16px;
    &:last-child {
      font-weight: 700;
    }
  }
`;

export const ContainerBannerVideo = styled.div`
  display: flex;
  padding-top: 74px;
  padding-bottom: 268px;

  img {
    width: 718px;
  }

  @media only screen and (max-width: 890px) {
    padding: 70px 30px;
    img {
      width: 328px;
    }
  }
`;

export const ContainerDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const ContainerVideosDesktop = styled.div`
  display: grid;
  grid-template-columns: 300px 300px 300px 300px;
  grid-gap: 13px;
  padding-top: 90px;

  @media only screen and (max-width: 890px) {
    display: none;
  }
`;

export const ContainerVideosMobile = styled.div`
  display: none;

  @media only screen and (max-width: 890px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    align-items: center;
    justify-content: center;
    padding: 45px 20px 0 20px;
  }
`;

export const BoxVideo = styled.div`
  width: 100%;
  height: 160px;
  background: #a39fc9;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 16px;

  @media only screen and (max-width: 890px) {
    border-radius: 4px;
  }
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
  background: #a39fc9;
`;
