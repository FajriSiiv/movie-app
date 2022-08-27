import React, { useEffect, useState } from "react";
import { apiKey } from "../api/index";
import Card from "../components/Card/Card";
import Hero from "../components/Hero/Hero";
import { ContainerCard, Form, Input } from "../components/Home/HomeStyled";
import { Loading } from "../components/loading/loading";

const Homepage = () => {
  const [searching, setSearching] = useState("");

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      const fetchData = async () => {
        setLoading(true);

        try {
          const hasilData = await fetch(
            "https://api.themoviedb.org/3/movie/popular?api_key=" +
              apiKey +
              "&language=en-US&page=1"
          ).then((res) => res.json());

          setData(hasilData.results);
          setLoading(false);
        } catch (error) {
          setLoading(false);
          setError(error);
        }
      };
      fetchData();
    }, 1000);
  }, []);

  const submitForm = async (e) => {
    e.preventDefault();

    if (searching) {
      try {
        const hasilData = await fetch(
          "https://api.themoviedb.org/3/search/movie?api_key=fcffe3caa72396d1d4ddf7b762e103ba&query=" +
            searching
        ).then((res) => res.json());

        setData(hasilData.results);
        setLoading(false);
        console.log(loading);
      } catch (error) {
        setLoading(false);
        setError(error);
      }

      setSearching("");
    }
  };

  const cariMovie = (e) => {
    e.preventDefault();
    setSearching(e.target.value);
  };

  const Error = () => {
    <>
      <h2>{error}</h2>
    </>;
  };

  return (
    <div>
      <Hero />
      <Form onSubmit={submitForm}>
        <Input
          type="text"
          placeholder="Search Movie"
          value={searching}
          onChange={cariMovie}
        />
      </Form>
      <ContainerCard>
        {data && data.map((e) => <Card key={e.id} {...e} />)}
        {loading && <Loading />}
        {error && <Error />}
      </ContainerCard>
    </div>
  );
};

export default Homepage;
