import React from "react";
import FacebookImg from "../assets/images/facebook.png";
import GitHubImg from "../assets/images/gitHub.png";
import InstagramImg from "../assets/images/instagram.png";
import LinkedinImg from "../assets/images/linkedin.png";
import MailImg from "../assets/images/Mail.png";
import TwitterImg from "../assets/images/twitter.png";

export default function Card(props) {
  return (
    <section className={props.darkMode ? "dark" : ""}>
      <div className={props.darkMode ? "card dark" : "card"}>
        <img
          src={require(`../assets/images/${props.item.coverImg}`)}
          alt="profile"
          className="card--image"
        />
        <div className={props.darkMode ? "card--info dark" : "card--info"}>
          <h1
            className={
              props.darkMode
                ? "card--profile_name dark"
                : "card--profile_name shadow"
            }
          >
            {props.item.name}
          </h1>
          <h3 className="card--profile_role">{props.item.role}</h3>
          <h6
            className={
              props.darkMode ? "card--profile_site dark" : "card--profile_site"
            }
          >
            {props.item.website}
          </h6>
        </div>
        <div className="btn_container">
          <a href={`mailto:${props.item.email}`} className="btn--primary">
            <img src={MailImg} alt="" className="mail" />
            <p className="primary">Email</p>
          </a>
          <a href={props.item.linkedin} className="btn--secondary">
            <img src={LinkedinImg} alt="linkedin" className="linkedin" />
            <p className="secondary">LinkedIn</p>
          </a>
        </div>
        <div className="text--info">
          <h3 className={props.darkMode ? "text--title dark" : "text--title"}>
            About
          </h3>
          <text
            className={props.darkMode ? "text--content dark" : "text--content"}
          >
            {props.item.about}
          </text>
          <h3 className={props.darkMode ? "text--title dark" : "text--title"}>
            Interests
          </h3>
          <text
            className={props.darkMode ? "text--content dark" : "text--content"}
          >
            {props.item.interests}
          </text>
        </div>
        <div className={props.darkMode ? "footer dark" : "footer"}>
          <a href={props.item.twitter}>
            <img src={TwitterImg} alt="twitter" className="footer--icon" />
          </a>
          <a href={props.item.facebook}>
            <img src={FacebookImg} alt="facebook" className="footer--icon" />
          </a>
          <a href={props.item.instagram}>
            <img src={InstagramImg} alt="instagram" className="footer--icon" />
          </a>
          <a href={props.item.github}>
            <img src={GitHubImg} alt="github" className="footer--icon" />
          </a>
        </div>
      </div>
    </section>
  );
}
