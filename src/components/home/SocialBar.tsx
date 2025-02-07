import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faInstagram, faYoutube, faWhatsapp, faTwitter } from "@fortawesome/free-brands-svg-icons";

const SocialBar: React.FC = () => {
  return (
    <div className="absolute left-2 top-[45vh] flex flex-col items-center space-y-4 z-50">
      {/* Dot + Vertical Line */}
      <div className="flex flex-col items-center">
        <div className="w-3 h-3 bg-gray-300 rounded-full mb-1"></div> {/* Small Dot */}
        <div className="w-[2px] h-20 bg-gray-300"></div> {/* Vertical Line */}
      </div>

      {/* Social Media Icons - White by Default, Change Color on Hover */}
      <a href="https://www.linkedin.com/company/edcmait/" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faLinkedin} className="text-white text-3xl hover:text-blue-600 transition duration-300" />
      </a>
      <a href="https://www.instagram.com/edcell.mait/" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faInstagram} className="text-white text-3xl hover:text-pink-500 transition duration-300" />
      </a>
      <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faYoutube} className="text-white text-3xl hover:text-red-600 transition duration-300" />
      </a>
      <a href="https://chat.whatsapp.com/Hj9nvbZKece10kf0RyfbmX" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faWhatsapp} className="text-white text-3xl hover:text-green-500 transition duration-300" />
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faTwitter} className="text-white text-3xl hover:text-blue-500 transition duration-300" />
      </a>
    </div>
  );
};

export default SocialBar;
