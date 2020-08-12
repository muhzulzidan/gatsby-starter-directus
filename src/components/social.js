
// change data before using

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Social = ({ siteTitle,  }) => {
    
// change data before using

  return (
    
    <  >
      
          <div className="social-div">
            <a  rel = "noopener noreferrer"
            target = "_blank"
            href = {
                "https://www.facebook.com/muhzulzidan"
            } > < FontAwesomeIcon icon = {
                ['fab', "facebook-square"]
            }
            /></a >

            <a  rel = "noopener noreferrer"
            target = "_blank"
            href = {
                `https://www.instagram.com/muhzulzidan`
            } > < FontAwesomeIcon icon = {
                ['fab', "instagram"]
            }
            /></a >
          
            <a rel="noopener noreferrer"target="_blank" href=
            {
                `https://mail.google.com/mail/u/0/?view=cm&fs=1&to=mzulzidan@gmail.com&su=Dari+gatsby-directus-starter&body=Hallo`
            } >
            <FontAwesomeIcon icon={['far',"envelope"]} />
            </a>

            <a  rel = "noopener noreferrer"
            target = "_blank"
            href = {
                `https://twitter.com/mzulzidan1`
            } > < FontAwesomeIcon icon = {
                ['fab', "twitter-square"]
            }
            /></a >
         </div>
    </>
  )
};

export default Social;

// change data before using