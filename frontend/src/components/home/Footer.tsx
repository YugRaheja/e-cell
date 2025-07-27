import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faInstagram,
  faYoutube,
  faWhatsapp,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1e1b4b] text-white px-6 md:px-20 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-white/10 pb-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <p>MAIT, ED Cell</p>
          <p>Delhi, India</p>
          <p>
            Email:{" "}
            <a
              href="mailto:edc@mait.ac.in"
              className="hover:text-indigo-300 underline"
            >
              edc@mait.ac.in
            </a>
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="/about" className="hover:text-indigo-300 transition">
                About Us
              </a>
            </li>
            <li>
              <a href="/events" className="hover:text-indigo-300 transition">
                Events
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-indigo-300 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a
              href="https://www.linkedin.com/company/edcmait/"
              target="_blank"
              rel="EDC Linkedin"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                className="text-white hover:text-blue-500 text-2xl transition"
              />
            </a>
            <a
              href="https://www.instagram.com/edcell.mait/"
              target="_blank"
              rel="EDC Instagram"
            >
              <FontAwesomeIcon
                icon={faInstagram}
                className="text-white hover:text-pink-500 text-2xl transition"
              />
            </a>
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="EDC Youtube"
            >
              <FontAwesomeIcon
                icon={faYoutube}
                className="text-white hover:text-red-600 text-2xl transition"
              />
            </a>
            <a
              href="https://chat.whatsapp.com/Hj9nvbZKece10kf0RyfbmX"
              target="_blank"
              rel="EDC Whatsapp Community"
            >
              <FontAwesomeIcon
                icon={faWhatsapp}
                className="text-white hover:text-green-500 text-2xl transition"
              />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="EDC Twitter"
            >
              <FontAwesomeIcon
                icon={faTwitter}
                className="text-white hover:text-blue-400 text-2xl transition"
              />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-sm text-gray-400 pt-6">
        © 2025 Entrepreneurship Devlopment Cell MAIT. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
