import Footer from "../footer/Footer";
import Header from "../header/Header";

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="w-full  px-7  py-12">{children}</main>

      <Footer />
    </>
  );
};

export default MainLayout;
