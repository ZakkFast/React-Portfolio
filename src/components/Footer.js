import React from "react";
import { SocialIcon } from "react-social-icons";


export default function Footer() {
    return (
        <div className="flex justify-center py-3 px-3 my-6">
          <SocialIcon
            url="https://github.com/ZakkFast"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://www.linkedin.com/in/zachary-fast/"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://twitter.com/ZakkFast"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
        </div>
    )
}