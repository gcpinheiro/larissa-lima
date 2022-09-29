import styled from 'styled-components';

export const ContainerCardCursos = styled.div`
  margin-top: 41px;
  width: 282px;
  height: 442px;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: scale(1.05);
    transition: transform 1s;
    cursor: pointer;
  }
`;

export const BoxImage = styled.div<{ img: any }>`
  height: 313px;
  width: 100%;
  padding-top: 33px;
  box-sizing: border-box;
  background: ${(props) => `url(${props.img})`} no-repeat center center;
  background-size: cover;
  border-radius: 16px 16px 0px 0px;
`;

export const BoxTitles = styled.div`
  height: 129px;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 18px 19px 20px 20px;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 0px 0px 16px 16px;
`;

export const Title = styled.div`
  font-weight: 600;
  font-size: 22.9299px;
  line-height: 128.5%;
  color: ${({ theme }) => theme.colors.secondary};
`;

export const NameTeacher = styled.div`
  font-weight: 300;
  font-size: 17.5px;
  line-height: 26px;
  ${({ theme }) => theme.colors.black}

  @media only screen and (max-width: 890px) {
    font-size: 14px;
    color: red;
  }
`;

export const CursoPago = styled.div`
  min-width: 282px;
  max-width: 282px;
  height: 442px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  background: linear-gradient(0deg, #2b1e69, #2b1e69), url(.jpg), #3b2e7d;
  box-shadow: 0px 3.52768px 3.52768px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
  opacity: 1;
`;
