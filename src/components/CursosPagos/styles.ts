import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ebf3fa;
  width: 100%;
  padding: 0px 113px 63px;
  gap: 80px;
  box-sizing: border-box;
  @media only screen and (max-width: 890px) {
    gap: 40px;
    padding: 0px 31px 31px;
  }
`;

export const ContainerDesktop = styled.div`
  width: 100%;
  flex-wrap: wrap;
  box-sizing: border-box;
  align-items: center;
  gap: 22px;

  @media only screen and (max-width: 1200px) {
    display: none;
    overflow: hidden;
  }

  @media only screen and (min-width: 1200px) {
    display: flex;
    flex-direction: row;
  }
`;

export const ContainerMobile = styled.div`
  @media only screen and (max-width: 1200px) {
    width: 100%;
    box-sizing: border-box;
    align-items: center;
    justify-content: center;
  }

  @media only screen and (max-width: 1200px) {
    display: flex;
    flex-direction: column;
  }

  @media only screen and (min-width: 1200px) {
    display: none;
  }
`;

export const Title = styled.h1`
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  color: #0e0b20;

  @media only screen and (max-width: 1200px) {
    font-weight: 700;
    font-size: 22px;
    line-height: 120%;
    text-align: center;
    color: #1c105a;
    width: 100%;
    white-space: none;
    word-wrap: break-word;
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
  background: #2b1e69;
`;
