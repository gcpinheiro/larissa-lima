import styled from 'styled-components';

interface ImageProps {
  imgUrl: string;
}

export const Container = styled.div`
  height: 753px;
  display: flex;
  flex-direction: column;
  padding: 84px;
  background: ${({ theme }) => theme.colors.primary};
  box-sizing: border-box;
  align-items: center;

  @media only screen and (max-width: 1200px) {
    padding: 70px 30px;
    text-align: center;
    height: auto;
  }
`;

export const Title = styled.h2`
  font-weight: 700;
  font-size: 42px;
  line-height: 63px;
  color: #ffffff;

  @media only screen and (max-width: 1200px) {
    font-size: 22px;
    line-height: 26px;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;

  img {
    position: absolute;
    left: 0;
  }

  @media only screen and (max-width: 1200px) {
    img {
      display: none;
    }
  }
`;

export const Butterfly = styled.img`
  width: 60px;
`;

export const Description = styled.div`
  display: flex;
  text-align: center;
  font-size: 18px;
  line-height: 27px;
  color: #ffffff;
  margin-top: 24px;

  @media only screen and (max-width: 1200px) {
    font-size: 16px;
    line-height: 24px;
  }
`;

export const Content = styled.div`
  width: 940px;
  height: 291px;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 2px 10px 2px rgba(0, 0, 0, 0.12);
  border-radius: 16px;
  padding: 53px 79px;
  margin-top: 41px;
  display: flex;
  align-items: center;
  gap: 60px;
  box-sizing: border-box;

  @media only screen and (max-width: 1200px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
    padding: 30px;
    gap: 16px;
  }
`;

export const ImagePerfil = styled.div<ImageProps>`
  background: url(${(props) => props.imgUrl}) center center no-repeat;
  background-size: cover;
  border-radius: 100%;
  width: 200px;
  height: 200px;
`;

export const Comment = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media only screen and (max-width: 1200px) {
    flex-direction: column-reverse;
  }
`;

export const Message = styled.p`
  font-size: 18px;
  line-height: 27px;

  color: ${({ theme }) => theme.colors.primary};
`;

export const Author = styled.span`
  font-weight: 500;
  font-size: 26px;
  line-height: 27px;
  color: ${({ theme }) => theme.colors.primary};
`;

export const BoxbuttonSlide = styled.div`
  width: 100%;
  margin-top: 51px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ButtonsSlide = styled.button`
  border-radius: 100%;
  margin-right: 9px;
  width: 14px;
  height: 14px;
  border: none;
  cursor: pointer;
`;
