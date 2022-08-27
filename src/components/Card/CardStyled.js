import styled from "styled-components";

export const Text = styled.div({
  width: "100%",
  position: "absolute",
  zIndex: 2,
  left: 0,
  bottom: 0,
  background: "black",
  padding: "10px 10px 60px 10px",
  transform: "translate(0,100%)",
});

export const Img = styled.img({
  objectFit: "cover",
  width: "100%",
  height: "90%",
  objectPosition: "top",
});

export const CardDiv = styled.div`
  width: 30%;
  height: 400px;
  position: relative;
  margin: 10px;
  overflow: hidden;
  &:hover ${Text} {
    transform: translate(0, 0);
  }
  &:hover ${Img} {
    transform: scale(1.1);
    filter: brightness(60%);
  }
  @media (max-width: 800px) {
    width: 45%;
  }
  @media (max-width: 500px) {
    width: 90%;
  }
`;

export const CardNest = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const Title = styled.h2({
  fontSize: 30,
  color: "white",
});

export const RatingDiv = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
  background: #1c2541;
  z-index: 3;
`;

export const Rating = styled.h3`
  display: flex;
  align-items: center;
`;

export const TextH2 = styled.h2`
  font-size: 20px;
`;

export const NullPoster = styled.div`
  width: 100%;
  height: 100%;
  max-height: 400px;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;
