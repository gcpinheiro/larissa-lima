import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 1417px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.neutral};
  padding: 117px 177px 0px 188px;
  box-sizing: border-box;
`;

export const TitleAndParagraph = styled.div``;

export const Title = styled.h1`
  font-weight: 700;
  font-size: 42px;
  line-height: 63px;
  text-align: center;
  color: ${({ theme }) => theme.colors.purple};
  margin-bottom: 41px;
`;

export const Paragraph = styled.p`
  width: 869px;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  text-align: center;
  color: ${({ theme }) => theme.colors.purple};
`;

export const BoxCardsPlan = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${({ theme }) => theme.colors.neutral};
`;

export const BoxPagamento = styled.div`
  height: 101px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const TitlePagamento = styled.p`
  font-weight: 600;
  font-size: 20px;
  line-height: 30px;
  color: ${({ theme }) => theme.colors.purple};
`;

export const BoxCardPagamentos = styled.div`
  height: 46px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const CardPagamento = styled.div`
  width: 97px;
  height: 46px;
  background: #cbcae9;
  border-radius: 8px;
  margin-right: 26px;
`;
