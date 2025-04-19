import Link from "next/link";
import { FaFacebook, FaFigma, FaGithub, FaLinkedin, FaStackOverflow } from "react-icons/fa";

import { MdOutlineMail } from "react-icons/md";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link href={`https://stackoverflow.com/users/30317917/jannatul-ferdous`} className="hover:text-accent transition-all duration-300">
      <FaStackOverflow />
      </Link>
      <Link href={`https://github.com/jannatul-akhi`} className="hover:text-accent transition-all duration-300">
      <FaGithub />
      </Link>
      <Link href={`https://www.figma.com/files/team/1111938547658373161/user/1076830911712903733?fuid=1076830911712903733`} className="hover:text-accent transition-all duration-300">
      <FaFigma />
      </Link>
      <Link href={`https://www.facebook.com/profile.php?id=100019176511052`} className="hover:text-accent transition-all duration-300">
      <FaFacebook />
      </Link>
      <Link href={`https://www.linkedin.com/in/jannatul-ferdous-87087221b/`} className="hover:text-accent transition-all duration-300">
      <FaLinkedin />
      </Link>
      <Link href="/contact" className="hover:text-accent transition-all duration-300">
      <MdOutlineMail />
      </Link>
    </div>
  );
};

export default Socials;
