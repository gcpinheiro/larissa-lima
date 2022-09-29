import styled from 'styled-components';

export interface PropsTypeTextDescription {
  typeTextPlan: 'none' | 'line-through';
}

export const Container = styled.div`
  width: 543px;
  height: 790px;
  background-color: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: scale(0.8);

  :hover {
    transform: scale(0.83);
    transition: transform 0.5s linear;
  }
`;
export const BoxMelhorOpcao = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 6px 21px 4px 0px;
  box-sizing: border-box;
  width: 100%;
  height: 35px;
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 16px 16px 0px 0px;
`;

export const BestChoice = styled.div`
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.white};
`;

export const BoxPrice = styled.div`
  height: 130px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-top: 55px;
`;

export const Title = styled.h1`
  font-weight: 300;
  font-size: 24px;
  line-height: 36px;
  color: ${({ theme }) => theme.colors.neutralMedium};
`;

export const Price = styled.h1`
  font-weight: 700;
  font-size: 54px;
  line-height: 81px;
  color: ${({ theme }) => theme.colors.secondary};
`;

export const Label = styled.label`
  font-weight: 300;
  font-size: 16px;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.secondary};
`;

export const PlanDescription = styled.div`
  margin-top: 52px;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 294px;
  padding: 0 51px 0 52px;
  box-sizing: border-box;
`;

export const BoxDescription = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Icon = styled.img`
  margin-right: 9px;
`;

export const DescriptionText = styled.p<PropsTypeTextDescription>`
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  text-decoration: ${(props) =>
    props.typeTextPlan == 'line-through' ? 'line-through' : 'none'};
  color: ${({ theme }) => theme.colors.purpleMedium};
`;
export const Enroll = styled.button`
  width: 440px;
  height: 64px;
  background: ${({ theme }) => theme.colors.secondary};
  border-radius: 50px;
  font-weight: 600;
  font-size: 26px;
  line-height: 39px;
  text-align: center;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.white};
  margin-top: 101px;
  border: none;

  :hover {
    opacity: 0.8;
  }
`;
