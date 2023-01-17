import Main from "@/Components/Main/Main";
import Quiz from "@/Components/Quiz/Quiz";
import { useRouter } from "next/router";

const quiz = ({ quizzes }) => {
  console.log(quizzes);
  const router = useRouter();
  const { quiz } = router.query;
  return (
    <div>
      <Main>
        <div className="bg-white pt-28">
          {quizzes.map((quiz) => (
            <Quiz key={quiz.id} quiz={quiz}></Quiz>
          ))}
        </div>
      </Main>
    </div>
  );
};

export const getStaticProps = async (context) => {
  const { params } = context;
  const res = await fetch(
    `https://openapi.programming-hero.com/api/quiz/${params?.quiz}`
  );
  const data = await res.json();
  return {
    props: {
      quizzes: data.data.questions,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch("https://openapi.programming-hero.com/api/quiz");
  const quizzes = await res.json();
  const paths = quizzes.data?.map((quiz) => {
    return {
      params: {
        quiz: `${quiz.id}`,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export default quiz;
