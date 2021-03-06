import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faFacebook,
  faLinkedin,
  faInstagram,
  fa5envelopesquare as faEnvelopeSquare
} from "@fortawesome/free-brands-svg-icons";
import { Icon } from "@material-ui/core";
import './SocialAccounts.css';
import { dom } from '@fortawesome/fontawesome-svg-core'
dom.watch();

var icons = [
    {
        link: "https://github.com/Slakstins",
        icon: faGithub,    
        class: "github social"
    },
    {
        link: "https://www.instagram.com/seth_lakstins/",
        icon: faInstagram,    
        class: "instagram social"
    },
    {
        link: "https://www.facebook.com/seth.lakstins/",
        icon: faFacebook,    
        class: "facebook social"
    },
    {
        link: "https://www.linkedin.com/in/seth-lakstins-05aa561b4/",
        icon: faLinkedin,    
        class: "linkedin social"
    }
]


export default function SocialAccounts() {
  return (
    <div class="social-container">
      {icons.map((iconDesc) => (
          <a href={iconDesc.link} className={iconDesc.class}>
              <FontAwesomeIcon icon={iconDesc.icon} size="4x"/>
          </a>
      ))}
          <a onClick={() => window.open('mailto:lakstise@rose-hulman.edu')} className="email social">
                <i class="fa fa-envelope email"></i>
          </a>
    </div>
  );
}

