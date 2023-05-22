import { useEffect, useState } from 'react';
import { Container, DivIntern, ItemDiv } from './JogodaVelha.styles';

type Players = "O"|"X";

export const JogodaVelha : React.FC=() =>{
  const [turn, setTurn] = useState<Players>("O")
  const [ winner , setWinner] = useState<Players|null>(null);
  const [draw, setDraw] = useState<boolean|null>(null);
  const [marks, setMarks] = useState<{[key:string]:Players}>({});
  const gameOver = !!winner||!!draw

  const play = (index:number)=>{
    if(marks[index] !=null) return;
    if(winner) return;
    setMarks(prev => ({...prev,[index]:turn}));
    setTurn(prev=>prev==="O"?"X":"O");
  };

  const getSquares = () =>{
    return new Array(9).fill(true)
  };

  const getWinner = () =>{
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

  const reset = () =>{
    setMarks({});
    setWinner(null);
    setDraw(null);
  };

  useEffect(()=>{
    const winner = getWinner()
    if(winner){
      setWinner(winner)
    }else{
      if(Object.keys(marks).length === 9)
      setDraw(true)
    }
  },[marks])

  return(
    <Container>
      {
        winner && <h1> {winner} Ganhou</h1>
      }
      {draw && <h1>Empate</h1>}
      {gameOver && <button onClick={reset}>Jogar novamente</button>}

      {!gameOver && <h1>vez do jogador {turn}</h1>}
      <DivIntern>
        {
          getSquares().map((_,i:any)=>(
            <ItemDiv onClick={()=>play(i)}>
              {marks[i]}
            </ItemDiv>
          ))
        }
      </DivIntern>
    </Container>
  )
}