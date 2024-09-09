import React from 'react';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa';
export const NabSocial = () => {
  return (
    <div className="flex h-screen items-center bg-transparent z-10 fixed">
      <div className="sticky p-4 bg-gray-800 text-white flex dark:bg-gray-50 h-fit">
        <ul className="space-y-4 flex justify-center flex-col">
          <li>
            <a
              href="https://github.com/Oibanoi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub
                className="text-gray-50 dark:text-slate-950"
                size={24}
              />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/huupb99/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin
                className="text-gray-50 dark:text-slate-950"
                size={24}
              />
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/pbhuu.99/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook
                className="text-gray-50 dark:text-slate-950"
                size={24}
              />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/pbhuu2002/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram
                className="text-gray-50 dark:text-slate-950"
                size={24}
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
