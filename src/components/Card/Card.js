import React from "react";
import { Link } from "react-router-dom";
import {
  CardDiv,
  CardNest,
  Img,
  NullPoster,
  Rating,
  RatingDiv,
  Text,
  TextH2,
  Title,
} from "./CardStyled";
import { AiFillStar } from "react-icons/ai";
import { BsQuestionLg } from "react-icons/bs";

const path = "https://image.tmdb.org/t/p/w500/";

const Card = ({ title, poster_path, overview, vote_average, id }) => {
  function PosterNull() {
    return (
      <NullPoster>
        <BsQuestionLg className="null-poster" />
      </NullPoster>
    );
  }

  return (
    <CardDiv>
      <Link to={`details/${id}`}>
        <CardNest>
          {poster_path === null ? (
            <PosterNull />
          ) : (
            <Img src={path + poster_path} alt={title} />
          )}
          <Text>
            <Title>{title}</Title>
            <p>{overview.substring(0, 100)}...</p>
          </Text>
          <RatingDiv>
            <TextH2>Rating</TextH2>
            <Rating>
              {vote_average} <AiFillStar className="star-icon" />{" "}
            </Rating>
          </RatingDiv>
        </CardNest>
      </Link>
    </CardDiv>
  );
};

export default Card;
