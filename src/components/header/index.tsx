import { useState } from 'react';

import close from './../../../public/close.svg';
import logoImg from './../../../public/logo.svg';
import menu from './../../../public/menu.svg';
import {
  Container,
  LogoContainer,
  ActionsContainer,
  OptionsMenu,
  Menu,
  ModalMenu,
  BoxClose,
  Close,
  ContainerButtonsModal,
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
        <LinkOptions href="#home">Home</LinkOptions>
        <LinkOptions href="#tcc">Sobre a TCC</LinkOptions>
        <LinkOptions href="#localizacao">Localização</LinkOptions>
        <LinkOptions href="#contato">Contato</LinkOptions>
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
          <OptionsMenu>
            <LinkOptions href="#home">Home</LinkOptions>
            <LinkOptions href="#tcc">Sobre a TCC</LinkOptions>
            <LinkOptions href="#localizacao">Localização</LinkOptions>
            <LinkOptions href="#contato">Contato</LinkOptions>
          </OptionsMenu>
        </ContainerButtonsModal>
      </ModalMenu>
    </Container>
  );
};
