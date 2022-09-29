import { useState } from 'react';

import close from './../../../public/close.svg';
import logoImg from './../../../public/logo.svg';
import menu from './../../../public/menu.svg';
import {
  Container,
  LogoContainer,
  ActionsContainer,
  LogInButton,
  RegisterButton,
  Menu,
  ModalMenu,
  BoxClose,
  Close,
  ContainerButtonsModal,
  BoxButton,
  Line,
  LinkOptions,
} from './styles';

export interface StateModal {
  state: boolean;
}

export const Header = () => {
  const [modal, setModal] = useState(false);

  function handleGoToTop() {
    window.scrollTo(0, 0);
  }

  return (
    <Container>
      <LogoContainer onClick={() => handleGoToTop()}>
        <img src={logoImg.src} alt="Larissa Lima" />
      </LogoContainer>
      <ActionsContainer>
        <LinkOptions href="/about">Home</LinkOptions>
        <LinkOptions href="/about">Sobre a TCC</LinkOptions>
        <LinkOptions href="/about">Contato</LinkOptions>
        <LinkOptions href="/about">Localização</LinkOptions>
      </ActionsContainer>
      <Menu
        src={menu.src}
        onClick={() => {
          setModal((state) => !state);
        }}
      ></Menu>
      <ModalMenu state={modal}>
        <BoxClose>
          <Close
            src={close.src}
            onClick={() => {
              setModal((state) => !state);
            }}
          ></Close>
        </BoxClose>
        <ContainerButtonsModal>
          <BoxButton>
            <LogInButton>Entrar</LogInButton>
            <Line></Line>
            <RegisterButton>Cadastre-se</RegisterButton>
          </BoxButton>
        </ContainerButtonsModal>
      </ModalMenu>
    </Container>
  );
};
