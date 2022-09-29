import styled from 'styled-components';

export const Card = styled.div`
  width: 100%;
  height: 55px;
  background: #cbcae9;
  border-radius: 4px;
  padding: 15px;
  box-sizing: border-box;
  position: relative;

  @media only screen and (max-width: 890px) {
    width: 328px;
    height: 77px;
  }
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  img {
    cursor: pointer;
  }
`;

export const Title = styled.h4`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #2b1e69;
`;

export const Content = styled.div`
  width: 100%;
  position: absolute;
  right: 0;
  margin-top: 12px;
  padding: 15px;
  box-sizing: border-box;
  background: #ffffff;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  z-index: 1;
`;
