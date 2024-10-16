import QR_code from "../assets/QR_code.png";
import { FaFacebook, FaInstagram, FaTiktok, FaXTwitter } from "react-icons/fa6";
import { FaApple } from "react-icons/fa";

const BottomMain = () => {
  return (
    <div className="relative flex flex-col justify-between items-center min-h-fit lg:px-16 pb-10 md:pb-10">
      {/* Header Text */}
      <div className="text-left mt-10 px-4">
        <h1 className="text-3xl md:text-4xl lg:text-4xl xl:text-8xl text-black">
        Sign up for early access and step into the lyfe adventure.
        </h1>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center space-y-12 md:space-y-0 md:space-x-16 lg:space-x-48 mt-16 px-4">
        {/* Join Waitlist Button */}
        <button className="relative border border-black rounded-full px-32 py-4 text-xs flex items-center justify-between space-x-3 hover:bg-black hover:text-white transition-all duration-300 md:text-xl">
          <span>Get Early Access</span>
          <svg
            className="w-9 h-8 absolute right-0"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 35 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>


        {/* Middle Text */}
        <p className="text-center text-lg md:text-xl lg:text-2xl">
          SCAN QR <br /> OR DROP YOUR EMAIL.
        </p>

        {/* QR Code and Label */}
        <div className="flex flex-col items-center text-center space-y-6">
          <img
            src={QR_code}
            alt="QR Code"
            className="w-60 h-60 md:w-72 md:h-72 lg:w-72 lg:h-72"
          />
        </div>

      </div>

      {/* Footer - Contact Information and Social Icons */}
      <div className="w-full flex flex-col  xl:flex-row justify-between items-center text-sm md:text-lg lg:text-2xl text-gray-800 px-8 mt-10 space-y-6 md:space-y-0">
        <div className="flex flex-col gap-10 md:-mt-3">
          <div className="flex flex-col items-center xl:items-start text-center md:text-left w-full md:w-auto">
            <p className="mb-1">PHONE</p>
            <p className="font-medium">(123) 456-7890</p>
          </div>
          <div className="flex items-center justify-center space-x-2 bg-gray-200 px-4 py-2 rounded-md w-full md:w-auto">
            <FaApple size={24} className="text-black" />
            <p className="text-sm md:text-base font-medium text-black text-center xl:text-left">
              Join waitlist for
              <br /> IOS APP.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center pt-0 xl:pt-0 xl:items-start text-center xl:text-left w-full md:w-auto">
          <p className="mb-1">EMAIL</p>
          <p className="font-medium">hello@reallygreatsite.com</p>
        </div>
        <div className="flex flex-col items-center xl:items-start w-full md:w-auto md:pt-16">
          <p>SOCIALS</p>
          <section className="flex space-x-4">
            <FaFacebook size={24} />
            <FaInstagram size={24} />
            <FaTiktok size={24} />
            <FaXTwitter size={24} />
          </section>
        </div>
        <div className="flex flex-col items-center xl:items-start text-center md:text-start w-full md:w-auto md:pt-28">
          <p className="mb-1 ">LOCATION</p>
          <p className="font-medium">hello@reallygreatsite.com</p>
        </div>
      </div>
    </div>
  );
};

export default BottomMain;
