import profile from "../images/profile.png";
import "./styles/hero.css";

function Hero() {
  return (
    <div
      id="hero"
      className="md:flex justify-around items-center bg-[#111] text-white h-screen overflow-hidden"
    >
      <div className="text-5xl font-bold w-1/2">
        <div className="text-red-600">HELLO,</div>
        <div>
          I'm{" "}
          <span className="text-red-600" id="name">
            Sabin Pudasaini{" "}
          </span>
        </div>
        <div>
          A
          <span className="text-red-600" id="name">
            {" "}
            Passionate{" "}
          </span>
          Frontend Web Developer.
        </div>
        <div className="text-lg italic mt-10">
          "Welcome to my corner of the web. I specialize in creating intuitive,
          visually compelling and user-friendly web experiences. With a keen eye
          for detail and a passion for clean, modern design. I transform complex
          problems into elegant solutions using the latest frontend
          technologies."
        </div>
      </div>
      <div>
        <img className="h-screen mt-20 z-20" src={profile} alt="profile" />
      </div>
    </div>
  );
}

export default Hero;
