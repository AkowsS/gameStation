import { Container,DivCard, DivInfo } from "./HomePage.styles";
import velhaGif from "../../public/gifs/giphy.gif";
import tetrisGif from "../../public/gifs/tetris.gif";
import { Link } from "react-router-dom";

export const HomePage: React.FC=()=>{

  return(
    <Container>
      <h1 style={{fontSize:"50px"}}>GameStation</h1>
      <DivCard>
        <div>
          <Link to="/game1" style={{textDecoration:"none"}}>
            <h1>
              Jogo da velha
            </h1>
          </Link>
          <DivInfo>
            <p>
              Preencha as linhas diagonais, as horizontais ou as verticais com um mesmo símbolo X ou O e impedessa que seu adversário faço isso primeiro que você. <Link target="_blank" to={"https://pt.wikipedia.org/wiki/Jogo_da_velha"} style={{color:"blue"}}>mais...</Link>
            </p>
          </DivInfo>
          <Link to="/game1" style={{textDecoration:"none"}}>
            <img src={velhaGif} alt="" />
          </Link>
        </div>
          <div>
          <h1>
            Tetris
          </h1>
          <DivInfo>
            <p style={{marginBottom:"15px"}}>
              Empilhe tetraminós que descem a tela. Ganhe pontos ao formar uma linha horizontal com os blocos. Quando a pilha de peças chega ao topo da tela, a partida se encerra. <Link target="_blank" to={"https://pt.wikipedia.org/wiki/Tetris"} style={{color:"blue"}}>mais...</Link>
            </p>
          </DivInfo>
          <img src={tetrisGif} alt="" />
        </div>
      </DivCard>
    </Container>
  );
};