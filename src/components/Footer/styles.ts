import Link from 'next/link';
import styled from 'styled-components';

export const ContainerFooter = styled.footer`
  width: 100%;
  height: 824px;
  background-color: ${({ theme }) => theme.colors.purple};
  padding: 78px 122px 37px 122px;
  box-sizing: border-box;

  @media only screen and (max-width: 1300px) {
    flex-direction: column;
    height: 1201px;
    padding: 71px 31px 27px 31px;
  }
`;

export const BoxTitleAndEmail = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: 1300px) {
    flex-direction: column;
  }
`;

export const BoxTitle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const TitleFooter = styled.h1`
  font-weight: 700;
  font-size: 24px;
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 23px;
`;

export const Paragraph = styled.p`
  width: 532px;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  color: ${({ theme }) => theme.colors.white};

  @media only screen and (max-width: 1300px) {
    width: 100%;
  }
`;

export const BoxEmail = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 60px;

  @media only screen and (max-width: 1300px) {
    flex-direction: column;
  }
`;
export const InputSendAMessage = styled.input`
  width: 394px;
  height: 50px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 4px;
  margin-right: 9px;
  padding: 12px 0 11px 21px;
  box-sizing: border-box;
  border: none;

  ::placeholder {
    color: ${({ theme }) => theme.colors.purple};
    font-weight: 400;
    font-size: 18px;
  }

  @media only screen and (max-width: 1300px) {
    width: 328px;
  }
`;

export const ButtonAsignature = styled.button`
  width: 181px;
  height: 50px;
  background: #ef4369;
  border-radius: 4px;
  padding: 12px 30px 11px 30px;
  box-sizing: border-box;
  border: none;
  color: ${({ theme }) => theme.colors.white};
  text-transform: uppercase;
  font-weight: 700;
  font-size: 16px;
  line-height: 27px;

  &:hover {
    opacity: 0.7;
  }

  @media only screen and (max-width: 1300px) {
    width: 328px;
    margin-top: 15px;
  }
`;

export const Line = styled.hr`
  width: 100%;
  border: 1px solid rgba(255, 255, 255, 0.2);
  margin-top: 126px;
  @media only screen and (max-width: 1300px) {
    display: none;
  }
`;

export const BoxAboutAndSocialMedias = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-top: 104px;

  @media only screen and (max-width: 1300px) {
    flex-direction: column-reverse;
  }
`;

export const BoxSocialMedia = styled.div`
  width: 332px;
  height: 99px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;

  @media only screen and (max-width: 1300px) {
    width: 100%;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
  }
`;

export const CursorPointer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  :hover {
    opacity: 0.7;
  }
`;

export const BoxIcons = styled.div`
  width: 119px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 23px;

  @media only screen and (max-width: 1300px) {
    margin-top: 0px;
    margin-bottom: 12px;
  }
`;

export const BoxAbout = styled.div`
  margin-left: 156px;
  margin-top: 8px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media only screen and (max-width: 1300px) {
    flex-direction: row;
    flex-wrap: wrap;
    margin: 0;
  }
`;

export const BoxDescriptioin = styled.div`
  width: 120px;
  display: flex;
  flex-direction: column;
  margin-right: 177px;

  :nth-child(4) {
    margin-right: 0px;
  }

  @media only screen and (max-width: 1300px) {
    margin: 0;
    margin-bottom: 30px;
  }
`;

export const TitleDescription = styled.h1`
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  margin-bottom: 14px;
  color: ${({ theme }) => theme.colors.white};
`;

export const Options = styled.a`
  text-decoration: none;
  font-weight: 300;
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 6px;
  color: ${({ theme }) => theme.colors.white};

  :hover {
    opacity: 0.7;
  }

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

export const BoxCopyrights = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 159px;

  @media only screen and (max-width: 1300px) {
    margin-top: 104px;
  }
`;

export const Copyright = styled.span`
  font-weight: 300;
  width: 100%;
  font-size: 16px;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.white};
  text-align: center;

  @media only screen and (max-width: 1300px) {
    font-size: 14px;
    text-align: center;
    width: 65%;
  }
`;

export const Hyphen = styled.span`
  @media only screen and (max-width: 1300px) {
    display: none;
  }
`;
