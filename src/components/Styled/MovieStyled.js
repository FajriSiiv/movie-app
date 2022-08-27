import styled from "styled-components";

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 50px;
  row-gap: 10px;
  background: #001d3d;
  padding: 60px 20px;
  max-height: 600px;
  height: max-content;
  border-radius: 10px;
  width: 100%;
  position: relative;
  @media (max-width: 800px) {
    margin-left: 0;
  }
`;

export const SpanP = styled.span`
  padding: 2px 10px;
  background: #ff686b;
  font-weight: 600;
  border-radius: 5px;
  font-size: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 800px) {
    font-size: 12px;
  }
`;

export const TextP = styled.p`
  font-size: 15px;
  font-weight: 600;
`;

export const Container = styled.div`
  display: flex;
  width: 100%;
  padding: 20px 50px;
  height: 100vh;
  max-height: 500px;
  position: relative;
  padding-top: 80px;
  @media (max-width: 800px) {
    padding: 60px 10px;
    flex-direction: column;
    max-height: 1200px;
    height: 100%;
    row-gap: 20px;
  }
`;

export const Img = styled.img`
  max-width: 300px;
  width: 100%;
  height: 100%;
  max-height: 400px;
`;
export const Title = styled.h1`
  font-size: 3rem;
  @media (max-width: 800px) {
    font-size: 1.3rem;
  }
`;

export const Desc = styled.p`
  font-size: 17px;
  display: flex;
  flex-direction: column;
  line-height: 25px;
  & span {
    font-weight: 600;
  }
  @media (max-width: 800px) {
    font-size: 11px;
    line-height: 20px;
  }
`;

export const DivInfos = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  max-height: 60px;
  gap: 10px;
  @media (max-width: 800px) {
    max-height: 300px;
  }
`;

export const DivRating = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  max-width: 400px;
  width: 100%;
  column-gap: 10px;
  @media (max-width: 800px) {
    max-width: 400px;
  }
`;

export const ImgDB = styled.img`
  height: 30px;
`;
export const Rating = styled.p`
  font-size: 20px;
  font-weight: 700;
`;

export const DivProduction = styled.div``;

export const NullPoster = styled.div`
  max-width: 300px;
  width: 100%;
  height: 100%;
  max-height: 400px;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ButtonRate = styled.button`
  position: absolute;
  right: 20px;
  top: 20px;
  height: 30px;
  width: 30px;
  background: transparent;
  outline: none;
  border: none;
  cursor: pointer;
  & svg {
    width: 100%;
    height: 100%;

    & path {
      color: ${(props) => (props.star ? "yellow" : "white")};
    }
  }
`;

export const BackButton = styled.button`
  position: absolute;
  left: 20px;
  top: 20px;
  padding: 3px 10px;
  font-size: 20px;
  background: red;
  outline: none;
  border: none;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
