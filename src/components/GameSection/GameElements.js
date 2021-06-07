import styled, { keyframes } from 'styled-components';

export const GameContainer = styled.div`
  position: relative;
  display: flex;
  height: 30vh;
  justify-content: center;
`;

export const GameBg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 1;
`;

const GameBgMoveAnimation = keyframes`
from {
  background-position: 0 0;
  }
  to {
    background-position: -10000px 0;
  }
`;

export const GameImg = styled.div`
  width: 100%;
  height: 100%;
  background: url(${({ bg }) => bg});
  background-repeat: repeat;
  background-position: 0 0;
  background-size: auto 100%;
  animation-name: ${({ isMove }) => isMove && GameBgMoveAnimation};
  animation-duration: 50s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
`;

export const GameCharacter = styled.img`
  width: 80px;
  height: 80px;
  position: absolute;
  bottom: 35px;
  left: 5%;
  object-fit: fill;
  position: absolute;
  transition: transform 0.3s ease;
  transform: translate(${({ coX, coY }) => `${coX}px, ${coY}px`});
  overflow: hidden;
`;

export const SayHi = styled.div`
  display: none;
  position: absolute;
  top: 35%;
  left: 5.5%;
  transform: translate(${({ coX, coY }) => `${coX}px, ${coY}px`});
`;

export const GameCharacterWrapper = styled.div`
  z-index: 3;
  display: flex;
  align-items: flex-end;
  overflow: hidden;

  &:hover ${SayHi} {
    display: block;
  }
`;
export const FinishGame = styled.div`
  position: absolute;
  align-self: center;
  top: 10%;
  width: 50%;
  height: 10vh;
  background: lightyellow;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  z-index: 5;
  padding: 20px;

  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
`;
