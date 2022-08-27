import styled from "styled-components";

export const Container = styled.div({
  height: "100%",
  maxHeight: 600,
  width: "100%",
  display: "flex",
  padding: "60px 50px 0 50px",
  "@media(max-width:800px)": {
    flexDirection: "column",
  },
  "@media(max-width:500px)": {
    padding: "30px 20px",
    maxHeight: 400,
  },
});

export const Text = styled.div({
  height: "500px",
  width: "80%",
  "@media(max-width:800px)": {
    height: 300,
    width: "100%",
  },
  "@media(max-width:500px)": {
    height: 150,
  },
});

export const TextP = styled.p({
  fontSize: 18,
  color: "#d3d3d3",
  fontWeight: 400,
  "@media(max-width:800px)": {
    fontSize: 15,
  },
  "@media(max-width:500px)": {
    fontSize: 12,
  },
});

export const TitleH1 = styled.h1({
  fontSize: 120,
  "@media(max-width:1050px)": {
    fontSize: 85,
  },
  "@media(max-width:800px)": {
    fontSize: 50,
  },
  "@media(max-width:500px)": {
    fontSize: 30,
  },
});

export const TextH2 = styled.h2({
  fontSize: 40,
  "@media (max-width:500px)": {
    fontSize: 20,
  },
});

export const InfoBox = styled.div({
  height: "500px",
  width: "20%",
  borderRadius: "5px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  background: "#1c2541",
  "@media (max-width:800px)": {
    flexDirection: "row",
    width: "100%",
    height: 120,
  },
  "@media (max-width:500px)": {
    height: 80,
  },
});

export const CardBox = styled.div({
  height: "30%",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  "@media (max-width:800px)": {
    height: "100%",

    "& svg": {
      width: 50,
      height: 50,
    },
  },
  "@media (max-width:500px)": {
    "& svg": {
      width: 30,
      height: 30,
    },
  },
});

export const CardP = styled.p({
  fontSize: 17,
  marginTop: 7,
  fontWeight: 300,
  "@media (max-width:500px)": {
    fontSize: 12,
  },
});
