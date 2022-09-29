import styled from 'styled-components';

export const Container = styled.div`
  height: 600px;
  display: flex;
  flex-direction: column;
  padding: 0 180px;
  background-color: #ebf3fa;
  box-sizing: border-box;
  align-items: center;

  @media only screen and (max-width: 890px) {
    padding: 0 31px 131px 31px;
    box-sizing: border-box;
    height: 850px;
  }
`;

export const Title = styled.h2`
  font-weight: 700;
  font-size: 42px;
  line-height: 63px;
  color: #2b1e69;
  margin-bottom: 90px;

  @media only screen and (max-width: 890px) {
    text-align: center;
    font-size: 22px;
    margin-bottom: 30px;
  }
`;

export const Paragraph = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #0e0b20;
  display: none;

  @media only screen and (max-width: 890px) {
    text-align: center;
    font-size: 22px;
    display: block;
    margin-bottom: 70px;
  }
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  box-sizing: border-box;
`;
