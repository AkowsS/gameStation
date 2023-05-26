import { DivMain, DivBack} from "./Menu.styles"
import backIcon from "../../public/icons/ponta-de-flecha.png"
import { Link } from "react-router-dom"
import { useState } from "react"

export const Menu : React.FC = ()=>{
  const [showMenuButton, setShowMenuButton] = useState(false)
  return (
    <div>
      <DivMain style={showMenuButton?{display:"block"}:{display:"none"}}>
        <div style={{backgroundColor:"purple"}}>
          <Link to="/">
            <h1 style={{color:"blue"}}>Home</h1>
          </Link>
        </div>
        <div>
          <Link to="/game1">
            <h1>Jogo da Velha</h1>
          </Link>
        </div>
        <div>
          <Link to="/">
            <h1>Tetris</h1>
          </Link>
        </div>
      </DivMain>

      <DivBack onClick={()=>setShowMenuButton(!showMenuButton)}>
        <img src={backIcon} alt="" style={showMenuButton?{rotate:"180deg"}:{}}/>
        <h1 style={showMenuButton?{color:"black"}:{color:"white"}}>Menu</h1>
      </DivBack>
    </div>
  )
}