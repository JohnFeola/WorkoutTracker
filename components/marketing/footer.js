import { FaTwitter, FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="text-gray-600 border-t-2">
      <div className="container px-20 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <span className="font-bold text-xl sm:mr-2">WorkoutApp</span>
        <p className="text-sm text-gray-500 sm:pl-2 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          ©2022 WorkoutApp
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <a href="https://twitter.com">
            <FaTwitter size={20} className="mx-3 text-twitter"></FaTwitter>
          </a>
          <a href="https://facebook.com">
            <FaFacebook size={20} className="mx-3 text-facebook"></FaFacebook>
          </a>
          <a href="https://linkedin.com">
            <FaLinkedin size={20} className="mx-3 text-linkedin"></FaLinkedin>
          </a>
          <a href="https://instagram.com">
            <FaInstagram size={20} className="mx-3 text-instagram"></FaInstagram>
          </a>
        </span>
      </div>
    </footer>
  );
}

export default Footer;