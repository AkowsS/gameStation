import { styled } from "@mui/system";

export const Container = styled("div")({
  position:"absolute",
  top:0,
  left:0,
  width:"100vw",
  height:"100vh",
  background:"rgba(0, 0, 0, 0.7)",
  display:"flex",
  justifyContent:"center",
  alignItems:"center",
  flexDirection:"column",
  button:{
    width:"200px",
    color:"white",
    fontSize:"20px",
    backgroundColor:"red",
    marginBottom:"20px",
    borderRadius:"10px",
  },
});

export const DivIntern = styled("div")({
  backgroundColor:"white",
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr",
  gridGap: "5px",
  gap: "5px",
  maxWidth:"50%",
  maxHeight:"60%",
  borderRadius:"10px",
});

export const ItemDiv = styled ("div")({
  borderRadius:"5px",
  fontSize:"50px",
  width:"10vw",
  height:"10vw",
  maxWidth:"130px",
  maxHeight:"100px",
  display:"flex",
  justifyContent:"center",
  alignItems:"center",
  cursor:"pointer",
  margin:"5px",
  color:"white",
  backgroundColor:"blue",
});
