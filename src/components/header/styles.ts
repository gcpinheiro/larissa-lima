import Link from 'next/link';
import styled from 'styled-components';

import { StateModal } from '.';

export const Container = styled.header`
  position: fixed;
  z-index: 3;
  background-color: ${({ theme }) => theme.colors.primary};
  height: 60px;
  padding: 0 124px;
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media only screen and (max-width: 890px) {
    padding: 21px 19px 19px 31px;
  }

  button {
    color: #ffffff;
    border-radius: 50px;
    border: 0;
    font-size: 14px;
    line-height: 21px;
    text-transform: uppercase;
    padding: 10px 26px;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const ActionsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 5px;
  padding: 0 20px;
  width: 30%;

  @media only screen and (max-width: 890px) {
    display: none;
  }
`;

export const LinkOptions = styled.a`
  font-size: 16px;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.secondaryLight};
  &:hover {
    text-decoration: underline;
    opacity: 0.8;
  }
  @media only screen and (max-width: 890px) {
    font-size: 32px;
  }
`;

export const LogInButton = styled.button`
  background: #2b1e69;
`;

export const RegisterButton = styled.button`
  background: #ef4369;
`;

export const Menu = styled.img`
  width: 22px;
  height: 20px;
  display: none;

  @media only screen and (max-width: 890px) {
    display: block;
    cursor: pointer;
  }
`;

export const ModalMenu = styled.div<StateModal>`
  width: ${(props) => (props.state ? '100%' : '0%')};
  height: ${(props) => (props.state ? '934px' : '0px')};
  background-color: #2b1e69;
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  padding: 16px;
  box-sizing: border-box;
  display: ${(props) => (props.state ? 'flex' : 'none')};
`;

export const BoxClose = styled.div`
  width: 100%;
  padding-right: 19px;
  box-sizing: border-box;
  display: flex;
  justify-content: flex-end;
`;

export const Close = styled.img`
  width: 15px;
  height: 15px;
  cursor: pointer;
`;

export const ContainerButtonsModal = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-top: 40px;
  padding: 24px;
  box-sizing: border-box;
`;

export const OptionsMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 100%;
  height: 300px;
`;

export const Line = styled.div`
  width: 203px;
  border: 1px solid rgba(255, 255, 255, 0.4);
  margin: 34px 0;
`;
