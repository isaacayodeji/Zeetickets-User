import Github from "../assets/images/github.svg";
import Linkedin from "../assets/images/linkdin.svg";
import Twitter from "../assets/images/twitter.svg";
const Footer: React.FC = () => {
  return (
    <footer className="px-4 py-2">
      <div className="flex justify-between">
        <h2>2024 All Right Reserved</h2>
        <div className="flex justify-between gap-3">
          <a
            className="icons rounded-[50%] hover:bg-sky-500 hover:scale-90 hover:translate-y-1"
            href="https://github.com/isaacayodeji"
            target="_blank"
          >
            <img src={Github} alt="github" />
          </a>
          <a
            className="icons rounded-[50%] hover:bg-sky-500 hover:scale-90 hover:translate-y-1"
            href="https://www.linkedin.com/in/ayodeji-olu-ewulo-a964b924b/"
            target="_blank"
          >
            <img src={Linkedin} alt="linkedin" />
          </a>
          <a
            className="icons rounded-[50%] hover:bg-sky-500 hover:scale-90 hover:translate-y-1"
            href="#"
            target="_blank"
          >
            <img src={Twitter} alt="twitter" />
          </a>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
