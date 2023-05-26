import React, { useEffect, useState } from 'react';
import { Container, Difficult, DivIntern, ItemDiv, SurrenderDiv } from './JogodaVelha.styles';
import { Menu } from '../../components/Menu';
import WhiteFlag from "../../public/icons/whiteflag.png"

type Players = 'O' | 'X';

enum GameMode {
  SinglePlayer = 'singlePlayer',
  MultiPlayer = 'multiPlayer',
}

export const JogodaVelha: React.FC = () => {
  const [turn, setTurn] = useState<Players>('O');
  const [winner, setWinner] = useState<Players | null>(null);
  const [draw, setDraw] = useState<boolean | null>(null);
  const [marks, setMarks] = useState<{ [key: string]: Players }>({});
  const [gameOver, setGameOver] = useState<boolean>(false);
  const [gameMode, setGameMode] = useState<GameMode>(GameMode.SinglePlayer);
  const [closeOptions,setCloseOptions] = useState(false)
  const [wPlay, setWPlay] = useState<Players | null>(null)

  const play = (index: number) => {
    setWPlay(turn);
    if (marks[index] != null || gameOver) return;
    setMarks(prev => ({ ...prev, [index]: turn }));
    setTurn(prev => (prev === 'O' ? 'X' : 'O'));
  };

  const getSquares = () => {
    return new Array(9).fill(true);
  };

  const getWinner = (): Players | undefined => {
    const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
    ];
    for (const line of lines) {
      const [a, b, c] = line;
      if (marks[a] && marks[a] === marks[b] && marks[a] === marks[c]) {
        return marks[a];
      }
    }
  };

  const reset = () => {
    setMarks({});
    setWinner(null);
    setDraw(null);
    setGameOver(false);
  };

  const randomMove = () => {
    if (turn === 'X') {
      const availableMoves: number[] = [];
      for (let i = 0; i < 9; i++) {
        if (!marks[i]) {
          availableMoves.push(i);
        }
      }
      const randomIndex = Math.floor(Math.random() * availableMoves.length);
      const randomMove = availableMoves[randomIndex];
      play(randomMove);
    }
  };
  const handleGameModeChange = (mode: GameMode) => {
    setGameMode(mode);
    reset();
  };

  useEffect(() => {
    const winner = getWinner();
    if (winner) {
      setWinner(winner);
      setGameOver(true);
    } else if(Object.keys(marks).length === 9) {
        setDraw(true);
        setGameOver(true);
      }
    if (!gameOver && turn === 'X' && gameMode === GameMode.SinglePlayer) {
      randomMove();
    }

  }, [marks]);

  const onSurrenderClick =()=>{
    setWinner(wPlay);
    setGameOver(true);
  };

  // const disableOnTrue = (flag:boolean) => {
    
  // }

  return (
    <div style={{display:"flex",justifyContent:"center"}}>
      <Menu/>
      <Difficult style={closeOptions?{display:"none"}:{display:"block"}}>
        <h1>GameMode:</h1>
        <div onClick={()=>setCloseOptions(true)}>
          <button onClick={() => handleGameModeChange(GameMode.SinglePlayer)}>SinglePlayer</button>
          <button onClick={() => handleGameModeChange(GameMode.MultiPlayer)}>MultiPlayer</button>
        </div>
      </Difficult>
      <Container>
        {winner && <h1 style={{ color: 'white' }}>{winner} Ganhou</h1>}
        {draw && <h1 style={{ color: 'white' }}>Empate</h1>}
        {gameOver && <button onClick={reset}>Jogar novamente</button>}

        {!gameOver && <h1 style={{ color: 'white' }}>Vez do jogador {turn}</h1>}
        <DivIntern>
          {getSquares().map((_, i: any) => (
            <ItemDiv key={i} onClick={() => play(i)}>
              {marks[i]}
            </ItemDiv>
          ))}
        </DivIntern>
        <SurrenderDiv onClick={()=>onSurrenderClick()}>
          <img src={WhiteFlag} alt=""/>
        </SurrenderDiv>
      </Container>
    </div>
  )
};






