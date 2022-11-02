import styled from 'styled-components';

const Button = styled.button`
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: 8px;
  font-size: 22px;
  font-weight: 600;
  padding: 15.5px 39.27px 14.53px 38.15px;
  box-sizing: border-box;

  :hover {
    opacity: 0.8;
  }

  @media only screen and (max-width: 890px) {
    font-size: 14px;
    padding: 8px 16px;
  }
`;

export default Button;
