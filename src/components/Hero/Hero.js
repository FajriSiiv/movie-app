import React from "react";
import {
  CardBox,
  CardP,
  Container,
  InfoBox,
  Text,
  TextH2,
  TextP,
  TitleH1,
} from "./HeroStyled";
import { FilmIcon } from "@heroicons/react/24/solid";
const Hero = () => {
  return (
    <Container>
      <Text>
        <TextP>Stream online your favorite film</TextP>
        <TitleH1>
          MOVIE <br /> CHANGE <br /> THE WORLD
        </TitleH1>
      </Text>
      <InfoBox>
        <CardBox>
          <TextH2>250+</TextH2>
          <CardP>Movie</CardP>
        </CardBox>
        <CardBox>
          <FilmIcon className="film-icon" />
          <CardP>Best Movie</CardP>
        </CardBox>
        <CardBox>
          <TextH2>150+</TextH2>
          <CardP>Series Choice</CardP>
        </CardBox>
      </InfoBox>
    </Container>
  );
};

export default Hero;
