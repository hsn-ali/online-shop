import About from "./components/About";
import CallAction from "./components/CallAction";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import Posts from "./components/Posts";
import Products from "./components/Products";
import Services from "./components/Services";
import SubHeader from "./components/SubHeader";
import Header from "./components/Header";

export default function Home() {
  return (
    <>
      <Header />
              <SubHeader />
              <div>

                <HomePage />
                <Products />
                <div className="py-16">
                  <Services />
                </div>
                <div className="py-16">
                  <Posts />
                </div>
                <div className="py-16">
                  <About />
                </div>
                <div className="pt-16">
                  <CallAction />
                </div>
                <div>
                  <Footer />
                </div>
              </div>
    </>
  );
}
