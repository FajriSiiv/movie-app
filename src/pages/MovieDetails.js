import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { apiKey, sessionID } from "../api";
import {
  BackButton,
  ButtonRate,
  Container,
  Desc,
  DivInfos,
  DivRating,
  Img,
  ImgDB,
  NullPoster,
  Rating,
  SpanP,
  Text,
  Title,
} from "../components/Styled/MovieStyled";
import { BsQuestionLg, BsFillStarFill, BsArrowLeft } from "react-icons/bs";
import swal from "sweetalert";
import { Loading } from "../components/loading/loading";

const path = "https://image.tmdb.org/t/p/w500/";

const MovieDetails = () => {
  const [detail, setDetail] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [voteMovie, setVoteMovie] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
      const fetchData = async () => {
        try {
          const data = await fetch(
            `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`
          ).then((res) => res.json());
          setLoading(false);
          setDetail(data);
        } catch (err) {
          setLoading(false);
          setError(err);
        }
      };
      fetchData();
    }, 1000);
  }, [id]);

  function PosterNull() {
    return (
      <NullPoster>
        <BsQuestionLg className="null-poster" />
      </NullPoster>
    );
  }

  const votingRate = async (e) => {
    e.preventDefault();
    console.log("submit", 10);
    const requestOptions = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ value: 10 }),
    };
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/rating?api_key=${apiKey}&guest_session_id=${sessionID}`,
      requestOptions
    );

    const data = await response.json();
    setVoteMovie(true);
    swal(data.status_message, {
      button: false,
      timer: 500,
    });
    console.log(data);
  };

  const DeleteVote = async (e) => {
    e.preventDefault();
    console.log("submit unrate");
    const requestOptions = {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/rating?api_key=${apiKey}&guest_session_id=${sessionID}`,
      requestOptions
    );
    const data = await response.json();
    setVoteMovie(false);
    swal(data.status_message, {
      button: false,
      timer: 500,
    });

    console.log(voteMovie);
    console.log(data);
  };

  return (
    <>
      {detail && (
        <Container>
          <BackButton onClick={() => navigate("/")}>
            <BsArrowLeft />
          </BackButton>
          {detail.poster_path === null ? (
            <PosterNull />
          ) : (
            <Img src={path + detail.poster_path} alt={detail.title} />
          )}
          <Text>
            <Title>{detail.title}</Title>
            <DivInfos>
              <SpanP> {detail.release_date}</SpanP>
              <SpanP> {detail.runtime} minutes</SpanP>
              {detail.genres.map((e) => (
                <SpanP key={e.id}>{e.name}</SpanP>
              ))}
              <SpanP>{detail.status}</SpanP>
              <SpanP style={{ textTransform: "uppercase" }}>
                {detail.original_language}
              </SpanP>
            </DivInfos>
            <DivRating>
              <ImgDB
                src="https://m.media-amazon.com/images/G/01/IMDb/BG_rectangle._CB1509060989_SY230_SX307_AL_.png"
                alt="logo imbdb"
              />
              <Rating>
                {detail.vote_average === 0
                  ? "No Rating"
                  : (Math.floor(detail.vote_average * 100) / 100).toFixed(1)}
                / 10
              </Rating>
            </DivRating>
            <Desc>
              <span>Overview : </span>
              {detail.overview}
            </Desc>
            <DivInfos>
              {detail.production_companies.map((e) => (
                <SpanP style={{ background: "#40916c" }} key={e.id}>
                  {" "}
                  {e.name}
                </SpanP>
              ))}
            </DivInfos>
            <Desc>
              <span>Vote : {detail.vote_count} </span>
            </Desc>
            <ButtonRate
              onClick={voteMovie ? DeleteVote : votingRate}
              value={10}
              star={voteMovie}
            >
              <BsFillStarFill />
            </ButtonRate>
          </Text>
        </Container>
      )}
      {loading && <Loading />}
      {error && <p>{error}</p>}
    </>
  );
};

export default MovieDetails;
