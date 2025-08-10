import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faInstagram,
  faYoutube,
  faFacebook,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons"; // X (Twitter) icon

const contributors = [
  {
    name: "Shivam KumarJha ",
    linkedin: "https://www.linkedin.com/in/shivam-kumar-jha-35686a238/",
    github: "https://github.com/Shivoo29",
  },
  {
    name: "Nalin Kumar",
    linkedin: "https://www.linkedin.com/in/nalin-khanna-877a99246/",
    github: "https://github.com/Nalin-khanna",
  },
  {
    name: "Ashish Negi",
    linkedin: "https://www.linkedin.com/in/ashish-negi-6754181a0/",
    github: "https://github.com/05Ashish",
  },
  {
    name: "Yug Raheja",
    linkedin: "https://www.linkedin.com/in/yug-raheja/",
    github: "https://github.com/YugRaheja",
  },
  {
    name: "Aashi Jain",
    linkedin: "https://www.linkedin.com/in/aashi-jain-474b3529a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    github: "https://github.com/aashijain03",
  },
  {
    name: "Sneha Sharma",
    linkedin: "https://www.linkedin.com/in/sneha-sharma-59183b320/",
    github: "https://github.com/contributor6",
  },
  {
    name: "Vaibhav Jain",
    linkedin: "https://www.linkedin.com/in/jainvaibhav26/",
    github: "https://github.com/vaibhavj22-05",
  },
  {
    name: "Kareena Grover",
    linkedin: "https://www.linkedin.com/in/kareena-grover-04860b32a/",
    github: "https://github.com/Kareena-3",
  },
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1e1b4b] text-white text-center py-10">
      <h2 className="text-xl font-semibold mb-4">
        Entrepreneurship Development Cell MAIT
      </h2>

      <p className="text-sm text-gray-400 mb-4">
        © {new Date().getFullYear()} Entrepreneurship Development Cell MAIT. All rights reserved.
      </p>

      <div className="flex justify-center space-x-5 mb-6">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} className="text-xl hover:text-blue-500 transition" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} className="text-xl hover:text-pink-500 transition" />
        </a>
        <a href="https://www.linkedin.com/company/edcmait/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} className="text-xl hover:text-blue-400 transition" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faXTwitter} className="text-xl hover:text-gray-300 transition" />
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faYoutube} className="text-xl hover:text-red-500 transition" />
        </a>
      </div>

      <div className="mt-6">
        <h3 className="text-lg font-medium mb-4">Contributors</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {contributors.map((contributor, index) => (
            <div key={index} className="text-center">
              <p className="text-white font-medium">{contributor.name}</p>
              <div className="flex justify-center space-x-3 mt-2">
                <a
                  href={contributor.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    className="text-lg hover:text-blue-400 transition"
                  />
                </a>
                <a
                  href={contributor.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faGithub}
                    className="text-lg hover:text-gray-300 transition"
                  />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
