import React from "react";
import styles from "./HeroStyles.module.css"
import topimg from "../../assets/hero-img.png"
import sunimg from "../../assets/sun.svg"
import moonimg from "../../assets/moon.svg"
import twitterimglight from "../../assets/twitter-light.svg"
import twitterimgdark from "../../assets/twitter-dark.svg"
import githubimglight from "../../assets/github-light.svg"
import githubimgdark from "../../assets/github-dark.svg"
import lkdinimglight from "../../assets/linkedin-light.svg"
import lkdinimgdark from "../../assets/linkedin-dark.svg"
import CV from "../../assets/cv.pdf"
import { useTheme } from "../../common/ThemeContext";

function Hero(){
    const {theme , toggleTheme} = useTheme();
    const themeIcon = theme === 'light' ? sunimg : moonimg;
    const twitterIcon = theme === 'light' ? twitterimglight : twitterimgdark;
    const githubIcon = theme === 'light' ? githubimglight : githubimgdark;
    const lkdinIcon = theme === 'light' ? lkdinimglight : lkdinimgdark;
    return <section className={styles.container}>
        <div className={styles.colorModeContainer}>
        <img  className={styles.hero} src={topimg} alt="ashutosh sharma" />
        <img className ={styles.colorMode} onClick={toggleTheme} src={themeIcon} alt="dark mode moon" />
        </div>
        <div className={styles.info}>
        <h1>Ashutosh <br /> Sharma</h1>
        <h2>FullStack Developer</h2>
        <span>
        <a href="https://twitter.com/" target="_blank">
            <img src={twitterIcon} alt="" />
            </a>
            <a href="https://github.com/" target="_blank">
            <img src={githubIcon} alt="" />
            </a>
            <a href="https://linkedin.com/" target="_blank">
            <img src={lkdinIcon} alt="" />
            </a>
        </span>
        <p className={styles.description}>With a passion for developing modern React web apps for commercial business</p>
        <a href="" >
            <button className="hover">Resume</button>
        </a>
        </div>
    </section>
}

export default Hero;