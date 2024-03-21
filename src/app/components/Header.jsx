'use client'
import phone from "../../assets/phone.svg";
import mail from "../../assets/mail.svg";
import insta from "../../assets/insta.svg";
import yt from "../../assets/youtube.svg";
import fb from "../../assets/fb.svg";
import twitter from "../../assets/twitter.svg";

const Header = () => {

    return (
        <div className="bg-[#23856D] text-white px-5 py-1 text-center h-[58px] items-center justify-between hidden sm:flex">
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
    );
};

export default Header;