import Banner from "./Banner";
import HomeCard from "./HomeCard";

const LandPage = ({ quizzes }) => {
  return (
    <div>
      <Banner />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4 m-10">
        {quizzes.map((quiz) => (
          <HomeCard key={quiz.id} quiz={quiz}></HomeCard>
        ))}
      </div>
    </div>
  );
};

// export const getStaticProps = async () => {
//   const res = await fetch(
//     "https://jsonplaceholder.typicode.com/posts?_limit=10"
//   );
//   const data = await res.json();
//   console.log(res);
//   return {
//     props: {
//       posts: data,
//     },
//   };
// };

export default LandPage;
