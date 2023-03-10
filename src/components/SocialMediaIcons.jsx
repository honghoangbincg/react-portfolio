import React from "react";

const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        href="https://linkedin.com"
        target="_blank"
        className="hover:opacity-50 transition duration-500"
        rel="noreferrer"
      >
        <img src="assets/linkedin.png" alt="linkedin-link" />
      </a>
      <a
        href="https://facebook.com"
        target="_blank"
        className="hover:opacity-50 transition duration-500"
        rel="noreferrer"
      >
        <img src="assets/facebook.png" alt="facebook-link" />
      </a>
      <a
        href="https://instagram.com"
        target="_blank"
        className="hover:opacity-50 transition duration-500"
        rel="noreferrer"
      >
        <img src="assets/instagram.png" alt="instagram-link" />
      </a>
      <a
        href="https://twitter.com"
        target="_blank"
        className="hover:opacity-50 transition duration-500"
        rel="noreferrer"
      >
        <img src="assets/twitter.png" alt="twitter-link" />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
