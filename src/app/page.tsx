import About from "./components/About";
import CallAction from "./components/CallAction";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import Posts from "./components/Posts";
import Products from "./components/Products";
import Services from "./components/Services";
import phone from "../assets/phone.svg";
import mail from "../assets/mail.svg";
import insta from "../assets/insta.svg";
import yt from "../assets/youtube.svg";
import fb from "../assets/fb.svg";
import twitter from "../assets/twitter.svg";

export default function Home() {
  return (
    <>
    <div className="bg-[#23856D] text-white px-5 py-1 text-center h-[58px] flex items-center justify-between">
                <div className="flex items-center">
                  <img src={phone.src} alt="phone" />
                  <span className="ml-1 font-[700] text-[14px]">+923362151488</span>
                  <div className="flex px-8">
                    <img src={mail.src} alt="email" />
                    <span className="ml-1 font-[700] text-[14px]">michelle.rivera@example.com</span>
                  </div>
                </div>
                <div>
                  <span className="font-[700] text-[14px]">Follow Us  and get a chance to win 80% off</span>
                </div>
                <div className="flex">
                  <span className="font-[700] text-[14px]">Follow Us  : </span>
                  <img src={insta.src} alt="instagram" className="mx-2" />
                  <img src={yt.src} alt="youtube" className="mx-2" />
                  <img src={fb.src} alt="facebook" className="mx-2" />
                  <img src={twitter.src} alt="twitter" className="mx-2" />
                </div>
              </div>

              {/* SUB HEADER */}

              {/* <Navbar /> */}

              <div className="text-black px-5 py-1 text-center h-[78px] flex items-center justify-between">
                <div className="flex items-center">
                  <span className="ml-1 font-[700] text-[24px]">Bandage</span>
                  <div>

                  </div>
                </div>
                <ul className="MuiList-root">
                  <li className="MuiListItem-root">
                    <div className="MuiListItemButton-root" role="button">
                      <span className="MuiListItemDecorator-root">
                        asd
                      </span>
                      <div className="MuiListItemContent-root">
                        sddsa
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
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
