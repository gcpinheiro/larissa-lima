import { useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import close from './../../../public/close.svg';
import instagram from './../../../public/instagram.svg';
import logoImg from './../../../public/logo.svg';
import menu from './../../../public/menu.svg';
import whatsapp from './../../../public/whatsapp.svg';
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
  CursorPointer,
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
        <Link href="https://instagram.com/larissalsdg?igshid=NzNkNDdiOGI=">
          <CursorPointer>
            <Image src={instagram}></Image>
          </CursorPointer>
        </Link>
        <Link href="https://api.whatsapp.com/send?phone=5585998480380&text=Ol%C3%A1!%20Vi%20seu%20an%C3%BAncio%20e%20desejo%20mais%20informa%C3%A7%C3%B5es%20sobre%20consulta">
          <CursorPointer>
            <Image src={whatsapp}></Image>
          </CursorPointer>
        </Link>
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
            <LinkOptions
              href="#home"
              onClick={() => {
                setModal((state) => !state);
              }}
            >
              Home
            </LinkOptions>
            <LinkOptions
              href="#tcc"
              onClick={() => {
                setModal((state) => !state);
              }}
            >
              Sobre a TCC
            </LinkOptions>
            <LinkOptions
              href="#localizacao"
              onClick={() => {
                setModal((state) => !state);
              }}
            >
              Localização
            </LinkOptions>
            <LinkOptions
              href="#contato"
              onClick={() => {
                setModal((state) => !state);
              }}
            >
              Contato
            </LinkOptions>
          </OptionsMenu>
        </ContainerButtonsModal>
      </ModalMenu>
    </Container>
  );
};
