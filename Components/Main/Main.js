import Footer from "../Footer/Footer";
import Nav from "../Nav/Nav";

const Main = ({ children }) => {
  return (
    <div>
      <Nav />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default Main;
