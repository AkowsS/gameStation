import { styled } from "@mui/system";
import pacmanImg from "@/public/img/MUW4Dh6.jpg";

export const Container = styled("div")({
  backgroundImage: `url(${pacmanImg})`,
  height: "100vh",
  width: "100vw",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  h1: {
    color: "white",
  },
});

export const DivCard = styled("div")({
  width: "30vw",
  minWidth: "500px",
  padding: "20px",
  borderRadius: "20px",
  display: "flex",
  flexDirection: "row",
  height: "400px",
  backgroundColor: "black",
  background: "rgba(0, 0, 0, 0.7)",
  justifyContent: "space-between",
  h1: {
    margin: "10px",
    ":hover": {
      cursor: "pointer",
    },
  },
  div: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  img: {
    height: "30vh",
    cursor: "pointer",
  },
});

export const DivInfo = styled("div")({
  width: "200px",
  p: {
    margin: "0px",
    color: "white",
  },
});
