import { Container,DivBack,DivCard,DivGame1 } from "./HomePage.styles";
import velhaGif from "../../public/gifs/giphy.gif";
import tetrisGif from "../../public/gifs/tetris.gif";
import { JogodaVelha } from "../../components/JogodaVelha";
import { useState } from "react";
import backIcon from "../../public/icons/ponta-de-flecha.png"

export const HomePage: React.FC=()=>{
  const [velhaClick, setVelhaClick] = useState(false);

  return(
    <Container>
      <h1 style={{fontSize:"50px"}}>GameStation</h1>
      <DivCard>
        <div onClick={()=>setVelhaClick(true)}>
          <h1>
            Jogo da velha
          </h1>
          <img style={{height:"300px",cursor:"pointer",}} src={velhaGif} alt="" />
        </div>
        <div>
          <h1>
            Tetris
          </h1>
          <img style={{height:"300px",cursor:"pointer",}} src={tetrisGif} alt="" />
        </div>
      </DivCard>
      <DivGame1  style={(velhaClick===true)?{display:"flex"}:{display:"none"}}>
        <JogodaVelha/>
        <DivBack style={{zIndex:999}} onClick={()=>setVelhaClick(false)}>
          <img src={backIcon} alt="" />
          <h1>Retornar</h1>
        </DivBack>
      </DivGame1>
    </Container>
  );
};