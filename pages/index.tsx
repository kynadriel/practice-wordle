import type { NextPage } from "next";
import Head from "next/head";
import { Fragment } from "react";
import Game from "../components/Game/Game";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Practice Wordle</title>
        <meta name="description" content="App to practice wordle game." />
      </Head>
      <Game />
    </Fragment>
  );
};

export default Home;
