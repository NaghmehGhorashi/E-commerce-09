import React from 'react';
import {
  FaInstagram,
  FaFacebook,
  FaTelegram,
  FaUtensils,
} from 'react-icons/fa';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-black to-[#0a0a0a] text-gray-200">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col items-center gap-8">
        {/* Logo / Icon */}
        <div className="flex items-center gap-3">
          <FaUtensils className="text-2xl text-orange-400" />
          <span className="font-semibold text-lg">Taste the World</span>
        </div>

        {/* Flags */}
        <div className="flex gap-4">
          <img
            src="https://flagcdn.com/w40/se.png"
            alt="Sweden"
            className="w-8 h-5 rounded shadow-md"
          />
          <img
            src="https://flagcdn.com/w40/it.png"
            alt="Italy"
            className="w-8 h-5 rounded shadow-md"
          />
          <img
            src="https://flagcdn.com/w40/jp.png"
            alt="Japan"
            className="w-8 h-5 rounded shadow-md"
          />
          <img
            src="https://flagcdn.com/w40/mx.png"
            alt="Mexico"
            className="w-8 h-5 rounded shadow-md"
          />
        </div>

        {/* Social Icons */}
        <div className="flex gap-5">
          <a
            href="#"
            aria-label="Instagram"
            className="p-3 bg-white/5 rounded-full hover:bg-orange-400 hover:text-black transition"
          >
            <FaInstagram className="text-xl" />
          </a>
          <a
            href="#"
            aria-label="Facebook"
            className="p-3 bg-white/5 rounded-full hover:bg-orange-400 hover:text-black transition"
          >
            <FaFacebook className="text-xl" />
          </a>
          <a
            href="#"
            aria-label="Telegram"
            className="p-3 bg-white/5 rounded-full hover:bg-orange-400 hover:text-black transition"
          >
            <FaTelegram className="text-xl" />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-xs text-gray-500">
          © {year} Taste the World — All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
