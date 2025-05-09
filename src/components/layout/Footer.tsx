import { FaFacebook, FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
export default function Footer() {
  return (
    <footer className="bottom-0 left-0 flex h-24 w-screen flex-col items-center justify-center gap-2 bg-gray-900 text-white">
      <div className="flex gap-2">
        <a href="https://github.com/JeffTabiri">
          <FaGithub className="text-2xl" />
        </a>
        <a href="linkedin.com/in/jeffrey-yaw-annor-tabiri-782525230">
          <FaLinkedin className="text-2xl" />
        </a>
        <a href="https://www.facebook.com/jeffrey.yawannortabiri/">
          <FaFacebook className="text-2xl" />
        </a>
      </div>
      <p>Made with Next.js</p>
    </footer>
  );
}
