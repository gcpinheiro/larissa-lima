import Image from 'next/image';
import Link from 'next/link';

import facebook from './../../../public/facebook.svg';
import instagram from './../../../public/instagram.svg';
import logoImg from './../../../public/logo.svg';
import youtube from './../../../public/youtube.svg';
import {
  ContainerFooter,
  BoxTitleAndEmail,
  BoxTitle,
  TitleFooter,
  Paragraph,
  BoxEmail,
  InputSendAMessage,
  ButtonAsignature,
  Line,
  BoxSocialMedia,
  BoxAboutAndSocialMedias,
  BoxIcons,
  BoxAbout,
  BoxDescriptioin,
  TitleDescription,
  Options,
  BoxCopyrights,
  Copyright,
  CursorPointer,
  Hyphen,
} from './styles';

const Footer = () => {
  return (
    <ContainerFooter>
      <BoxTitleAndEmail>
        <BoxTitle>
          <TitleFooter>Titulo Lorem Lipsum</TitleFooter>
          <Paragraph>
            Consectetur tortor elementum aenean gravida volutpat aliquam morbi.
            Ut nullam vitae dolor vestibulum mollis quis bibendum venenatis
          </Paragraph>
        </BoxTitle>
        <BoxEmail>
          <InputSendAMessage
            type="email"
            placeholder="Seu e-mail"
          ></InputSendAMessage>
          <ButtonAsignature>Assine agora</ButtonAsignature>
        </BoxEmail>
      </BoxTitleAndEmail>
      <Line />
      <BoxAboutAndSocialMedias>
        <BoxSocialMedia>
          <Image src={logoImg}></Image>
          <BoxIcons>
            <Link href="https://www.instagram.com/innovacci.academy/">
              <CursorPointer>
                <Image src={instagram}></Image>
              </CursorPointer>
            </Link>
            <Link href="https://www.instagram.com/innovacci.academy/">
              <CursorPointer>
                <Image src={facebook}></Image>
              </CursorPointer>
            </Link>
            <Link href="https://www.instagram.com/innovacci.academy/">
              <CursorPointer>
                <Image src={youtube}></Image>
              </CursorPointer>
            </Link>
          </BoxIcons>
        </BoxSocialMedia>
        <BoxAbout>
          <BoxDescriptioin>
            <TitleDescription>Sobre</TitleDescription>
            <Options href="#">Quem somos</Options>
            <Options href="#">Imprensa</Options>
            <Options href="#">Privacidade</Options>
            <Options href="#">Termos de Uso</Options>
          </BoxDescriptioin>
          <BoxDescriptioin>
            <TitleDescription>Sobre</TitleDescription>
            <Options href="#">Quem somos</Options>
            <Options href="#">Imprensa</Options>
            <Options href="#">Privacidade</Options>
            <Options href="#">Termos de Uso</Options>
          </BoxDescriptioin>
          <BoxDescriptioin>
            <TitleDescription>Sobre</TitleDescription>
            <Options href="#">Quem somos</Options>
            <Options href="#">Imprensa</Options>
            <Options href="#">Privacidade</Options>
            <Options href="#">Termos de Uso</Options>
          </BoxDescriptioin>
          <BoxDescriptioin>
            <TitleDescription>Sobre</TitleDescription>
            <Options href="#">Quem somos</Options>
            <Options href="#">Imprensa</Options>
            <Options href="#">Privacidade</Options>
            <Options href="#">Termos de Uso</Options>
          </BoxDescriptioin>
        </BoxAbout>
      </BoxAboutAndSocialMedias>
      <BoxCopyrights>
        <Copyright>
          © 2022 Innovaci Academy <Hyphen>-</Hyphen> Todos os Direitos
          Reservados
        </Copyright>
      </BoxCopyrights>
    </ContainerFooter>
  );
};

export default Footer;
