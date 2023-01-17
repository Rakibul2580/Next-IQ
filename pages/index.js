import Head from "next/head";
import { Inter } from "@next/font/google";
import Main from "@/Components/Main/Main";
import LandPage from "@/Components/Home/Home";
const inter = Inter({ subsets: ["latin"] });

export default function Home({ quizzes }) {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-white">
        <Main>
          <LandPage quizzes={quizzes}></LandPage>
        </Main>
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  const res = await fetch("https://openapi.programming-hero.com/api/quiz");
  const data = await res.json();

  return {
    props: {
      quizzes: data.data,
    },
  };
};
