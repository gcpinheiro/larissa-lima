import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 111px 100px;
  box-sizing: border-box;
  text-align: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};

  @media only screen and (max-width: 890px) {
    padding: 70px 32px;
  }
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.white};
  font-weight: 700;
  font-size: 42px;
  line-height: 63px;

  @media only screen and (max-width: 890px) {
    font-size: 22px;
    line-height: 26px;
  }
`;

export const Paragraph = styled.p`
  font-size: 18px;
  margin-top: 4px;
  line-height: 27px;
  color: ${({ theme }) => theme.colors.white};

  @media only screen and (max-width: 890px) {
    font-size: 18px;
    line-height: 27px;
  }
`;

export const ContainerBanner = styled.div`
  margin: 40px 0px;
  width: 100%;
  img {
    width: 1239px;
  }

  @media only screen and (max-width: 890px) {
    img {
      width: 100%;
    }
  }
`;

export const Iframe = styled.iframe`
  width: 100%;
  border: none;
  border-radius: 8px;
`;

export const ContainerDescription = styled.div`
  display: flex;
  margin-top: 10px;
  color: #0e0b20;
`;

export const ContainerDetail = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: #2b1e69;
`;
