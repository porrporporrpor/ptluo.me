import React, { useState, useEffect } from 'react';
import useKeypress from 'react-use-keypress';
import {
  MapBg,
  IdleRight,
  RunRight,
  RunLeft,
  IdleLeft,
  JumpLeft,
  JumpRight,
} from '../../assets/images/games';

import {
  GameContainer,
  GameBg,
  GameImg,
  GameCharacterWrapper,
  GameCharacter,
  SayHi,
  FinishGame,
} from './GameElements';

const GameSection = () => {
  const [coX, setCoX] = useState(0);
  const [coY, setCoY] = useState(0);
  const [isFinish, setIsFinish] = useState(false);
  const [character, setCharacter] = useState(IdleRight);
  const step = 30;
  const moveLeft = () => {
    if (isFinish) {
      setIsFinish(false);
    }
    if (coX >= 10) {
      setCoX(coX - step);
    }
    setCharacter(RunLeft);
  };
  const moveRight = () => {
    if (coX <= window.innerWidth - 300) {
      setCoX(coX + step);
    } else setIsFinish(true);

    setCharacter(RunRight);
  };

  const jump = () => {
    setCoY(coY - 50);
    if (character === RunLeft || character === IdleLeft) {
      setCharacter(JumpLeft);
    } else setCharacter(JumpRight);

    setTimeout(() => {
      setCoY(0);
      resetCharacter();
    }, 200);
  };

  const resetCharacter = () => {
    setIsFinish(false);
    if (character === RunLeft || character === JumpLeft) {
      setCharacter(IdleLeft);
    } else if (character === RunRight || character === JumpRight) {
      setCharacter(IdleRight);
    }
  };

  useKeypress(['ArrowLeft', 'ArrowRight', ' '], (event) => {
    if (event.key === 'ArrowLeft') {
      moveLeft();
    } else if (event.key === 'ArrowRight') {
      moveRight();
    } else jump();
  });

  useEffect(() => {
    window.addEventListener('keyup', resetCharacter);
    return () => window.removeEventListener('keyup', resetCharacter);
  }, [coX]);

  return (
    <React.Fragment>
      <div
        style={{
          width: '100%',
          height: '100px',
          border: 0,
          background:
            'linear-gradient(0deg, rgba(221,247,255,1) 0%, rgba(247,253,255,0) 69%, rgba(255,255,255,0) 100%)',
        }}
      />
      <GameContainer>
        <GameBg>
          <GameImg bg={MapBg} isMove={isFinish} />
        </GameBg>

        <GameCharacterWrapper>
          <SayHi coX={coX} coY={coY}>
            I can do it!
          </SayHi>
          <GameCharacter src={character} coX={coX} coY={coY} />
        </GameCharacterWrapper>
        {isFinish && (
          <FinishGame>
            Today i will be a better version of myself than yesterday :-)
          </FinishGame>
        )}
      </GameContainer>
    </React.Fragment>
  );
};

export default GameSection;
