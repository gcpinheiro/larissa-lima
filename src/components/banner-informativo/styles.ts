import styled from 'styled-components';

export const ContainerBannerInformativo = styled.div`
  width: 100%;
  height: 722px;
  display: flex;
  flex-direction: column;
  padding: 110px;
  box-sizing: border-box;
  background-color: #f74e73;

  @media only screen and (max-width: 1220px) {
    height: 1332px;
  }
`;

export const RowInformations = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  &:nth-child(2) {
    margin-top: 75px;
  }

  @media only screen and (max-width: 1220px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &:nth-child(2) {
      margin-top: 56px;
    }
  }
`;

export const BoxInformation = styled.div`
  width: 330px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (max-width: 1220px) {
    flex-direction: column;
    justify-content: center;
    margin-top: 56px;

    &:nth-child(1) {
      margin-top: 0;
    }
  }
`;

export const TitleInformativo = styled.div`
  font-weight: 700;
  font-size: 53px;
  line-height: 90px;
  color: ${({ theme }) => theme.colors.white};

  @media only screen and (max-width: 1220px) {
    font-size: 40px;
    line-height: 60px;
  }
`;

export const TextoInformativo = styled.div`
  font-weight: 400;
  font-size: 24px;
  line-height: 36px;
  color: ${({ theme }) => theme.colors.white};
  text-align: center;

  @media only screen and (max-width: 1220px) {
    font-size: 20px;
    line-height: 30px;
  }
`;
