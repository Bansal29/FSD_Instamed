import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
const About = () => {
  const visitInstagram = () => {
    window.location = "https://instagram.com";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="D:\vs code\MERN_project\mernProjectEcommerce\frontend\src\images\download.jpeg"
              alt="Founder"
            />
            <Typography>Aryan Bansal</Typography>
            <Button onClick={visitInstagram} color="primary">
              Visit Instagram
            </Button>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="D:\vs code\MERN_project\mernProjectEcommerce\frontend\src\images\download.jpeg"
              alt="Founder"
            />
            <Typography>Murtuza Tuta</Typography>
            <Button onClick={visitInstagram} color="primary">
              Visit Instagram
            </Button>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="D:\vs code\MERN_project\mernProjectEcommerce\frontend\src\images\download.jpeg"
              alt="Founder"
            />
            <Typography>Shivam Upadhayay</Typography>
            <Button onClick={visitInstagram} color="primary">
              Visit Instagram
            </Button>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="D:\vs code\MERN_project\mernProjectEcommerce\frontend\src\images\download.jpeg"
              alt="Founder"
            />
            <Typography>Aishwarya Gadikar</Typography>
            <Button onClick={visitInstagram} color="primary">
              Visit Instagram
            </Button>
            <span>
              This is an online pharmacy wesbite made by Aryan Bansal, Murtuza
              Tuta, Shivam Upadhyay and Aishwarya Gadekar. We have used the MERN
              stack to build the website.
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Our Brands</Typography>
            <a href="https://www.youtube.com" target="blank">
              <YouTubeIcon className="youtubeSvgIcon" />
            </a>

            <a href="https://instagram.com" target="blank">
              <InstagramIcon className="instagramSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
