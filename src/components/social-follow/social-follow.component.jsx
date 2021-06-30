// Component created to implement social media in our platform

import React from "react";
import './social-follow.styles.scss';

// Importing fontawesomeicon component from react
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Importing the social media required
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";


// Declaring functional component
export default function SocialFollow() {
  return (
    <div class="social-container">
        <a href="https://www.facebook.com/coronavirus_info" 
        className="facebook social">
        <FontAwesomeIcon icon={faFacebook}  />
        </a>
        <a href="https://support.google.com/youtube/answer/9777243?hl=en"
            className="youtube social">
            <FontAwesomeIcon icon={faYoutube}  />
        </a>
        <a href="https://www.instagram.com/learnbuildteach"
        className="instagram social">
        <FontAwesomeIcon icon={faInstagram}  />
        </a>
        <a href="https://blog.twitter.com/en_us/topics/company/2020/covid-19"
            className="twitter social">
            <FontAwesomeIcon icon={faTwitter}  />
        </a>
    </div>
  );
}