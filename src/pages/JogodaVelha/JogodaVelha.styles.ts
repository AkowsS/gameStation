import { styled } from "@mui/system";
import pacmanImg from "@/public/img/MUW4Dh6.jpg";

export const Container = styled("div")({
  width: "100vw",
  height: "100vh",
  backgroundImage: `url(${pacmanImg})`,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  button: {
    width: "200px",
    color: "white",
    fontSize: "20px",
    backgroundColor: "red",
    marginBottom: "20px",
    borderRadius: "10px",
  },
});

export const DivIntern = styled("div")({
  backgroundColor: "white",
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr",
  gridGap: "5px",
  gap: "5px",
  maxWidth: "50%",
  maxHeight: "60%",
  borderRadius: "10px",
});

export const ItemDiv = styled("div")({
  borderRadius: "5px",
  fontSize: "50px",
  width: "10vw",
  height: "10vw",
  maxWidth: "130px",
  maxHeight: "100px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
  margin: "5px",
  color: "white",
  backgroundColor: "blue",
});

export const Difficult = styled("div")({
  top: "50vh",
  position: "absolute",
  backgroundColor: "gray",
  borderRadius: "10px",
  width: "20vw",
  minWidth: "225px",
  maxWidth: "390px",
  textAlign: "center",
  div: {
    display: "flex",
    justifyContent: "space-between",
    padding: "10px",
  },
  button: {
    borderRadius: "10px",
    height: "50px",
  },
});

export const SurrenderDiv = styled("div")({
  marginTop: "10px",
  display: "flex",
  cursor: "pointer",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "white",
  width: "90px",
  height: "90px",
  borderRadius: "50px",
  img: {
    width: "60px",
    height: "60px",
  },
});
