import Image from 'next/image';
import Link from 'next/link';

import instagram from './../../../public/instagram.svg';
import logoImg from './../../../public/logo.svg';
import whatsapp from './../../../public/whatsapp.svg';
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
      {/* <BoxTitleAndEmail>
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
      <Line /> */}
      <BoxSocialMedia>
        <Image src={logoImg}></Image>
        <BoxIcons>
          <Link href="https://www.instagram.com/innovacci.academy/">
            <CursorPointer>
              <Image src={instagram}></Image>
            </CursorPointer>
          </Link>
          <Link href="https://api.whatsapp.com/send?phone=5585998480380&text=Ol%C3%A1!%20Vi%20seu%20an%C3%BAncio%20e%20desejo%20mais%20informa%C3%A7%C3%B5es%20sobre%20consulta">
            <CursorPointer>
              <Image src={whatsapp}></Image>
            </CursorPointer>
          </Link>
          <Link href="https://www.instagram.com/innovacci.academy/">
            <CursorPointer>
              <Image src={youtube}></Image>
            </CursorPointer>
          </Link>
        </BoxIcons>
      </BoxSocialMedia>
      {/* <BoxAboutAndSocialMedias>
        <BoxSocialMedia>
          <Image src={logoImg}></Image>
          <BoxIcons>
            <Link href="https://www.instagram.com/innovacci.academy/">
              <CursorPointer>
                <Image src={instagram}></Image>
              </CursorPointer>
            </Link>
            <Link href="https://api.whatsapp.com/send?phone=5585998480380&text=Ol%C3%A1!%20Vi%20seu%20an%C3%BAncio%20e%20desejo%20mais%20informa%C3%A7%C3%B5es%20sobre%20consulta">
              <CursorPointer>
                <Image src={whatsapp}></Image>
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
        </BoxAbout>
      </BoxAboutAndSocialMedias> */}
      <BoxCopyrights>
        <Copyright>
          ?? 2022 Innovaci Academy <Hyphen>-</Hyphen> Todos os Direitos
          Reservados
        </Copyright>
      </BoxCopyrights>
    </ContainerFooter>
  );
};

export default Footer;
