import { styled } from "@mui/system";
import MenuImage from "../../public/img/backgroundMenu.jpg"

export const DivMain = styled("div")({backgroundImage:`url(${MenuImage})`,
  backgroundColor:"white",
  width:"250px",
  height:"100vh",
  position:"absolute",
  div:{
    width:"100%",
    backgroundColor:"white",
    marginTop:"20px",
    display:"flex",
    justifyContent:"center",
  },
  a:{
    color:"red",
    textDecoration:"none",
  }
});

export const DivBack = styled ("div")({
  position:"absolute",
  bottom:"10px",
  display:"flex",
  justifyContent:"center",
  alignItems:"center",
  cursor: "pointer",
  h1:{
    margin:0,
  },
  img:{
    width:"60px",
  },
});