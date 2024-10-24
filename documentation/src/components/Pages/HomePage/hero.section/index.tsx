import React from "react";
import './styles.scss';

export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <header className="header-area">
        <div id="home" className="header-hero bg_cover d-lg-flex align-items-center">
          <Shades />
          <div className="container">
            <div className="row align-items-center justify-content-center justify-content-lg-between">
              <div className="col col--4">
                <div className="header-hero-content">
                  <h3
                    className="header-title wow fadeInLeftBig"
                    data-wow-duration="1.3s"
                    data-wow-delay="0.2s"
                    style={styles.headerTitle}
                  >
                    Cross Platform <span>React Native</span> UI toolkit
                  </h3>
                  <p
                    className="text wow fadeInLeftBig"
                    data-wow-duration="1.5s"
                    data-wow-delay="0.5s"
                    style={styles.intro}
                  >
                    A React Native framework for making cross platform applications.
                    Highlights flexibility and adaptability in building mobile apps.
                  </p>
                  <ul className="d-flex">
                    <li>
                      <PlatformTag wowDuration="1.3s" wowDelay="0s" icon="icon-android" text="Android" style={styles.platformAndroid} />
                    </li>
                    <li>
                      <PlatformTag wowDuration="1.5s" wowDelay="0s" icon="icon-apple" text="iOS" style={styles.platformIos} />
                    </li>
                    <li>
                      <PlatformTag wowDuration="2.2s" wowDelay="0s" icon="icon-web" text="Web" style={styles.platformWeb} />
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col col--8">
                <div className="header-image">
                  <img
                    src="/flexnative/img/platforms-demo.svg"
                    alt="app"
                    className="image wow fadeInRightBig"
                    data-wow-duration="1.3s"
                    data-wow-delay="0.5s"
                    style={styles.headerImage}
                  />
                  <div
                    className="image-shape wow fadeInRightBig"
                    data-wow-duration="1.3s"
                    data-wow-delay="0.8s"
                    style={styles.headerShape}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 414.872 382.682">
                      <path id="Path_95" data-name="Path 95" d="M175.933,183.556c97.165,0,175.933-90.955,175.933,6.211A175.933,175.933,0,0,1,0,189.766C0,92.6,78.768,183.556,175.933,183.556Z" transform="matrix(0.819, 0.574, -0.574, 0.819, 209.757, -118.704)" fill="#0898e7"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

class Shades extends React.PureComponent {
  render() {
    return (
      <>
        <div className="shape shape-1" />
        <div className="shape shape-2" />
        <div className="shape shape-3" />
        <div className="shape shape-4" />
        <div className="shape shape-5" />
        <div className="shape shape-6" />

        <div className="header-shape-1" />
        <div className="header-shape-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="394.68" height="561.669" viewBox="0 0 394.68 561.669">
            <path id="Path_86" data-name="Path 86" d="M693.264-440.087S521.146-202.472,616.22-205.994s174.3-109.159,160.217-31.691-102.117,172.542,0,137.329,177.575,49.4,205.745,221.938c-.011,0,.081-561.669.081-561.669Z" transform="translate(-587.583 440.087)" fill="#edebf8"/>
          </svg>
        </div>
      </>
    );
  }
}

type PlatformTagProps = {
  wowDuration: string;
  wowDelay: string;
  style: React.CSSProperties;
  icon: string;
  text: string
}

class PlatformTag extends React.PureComponent<PlatformTagProps> {
  render() {
    return (
      <div
        className="platform-tag wow fadeInLeftBig"
        data-wow-duration={this.props.wowDuration}
        data-wow-delay={this.props.wowDelay}
        style={this.props.style}
      >
        <span className={this.props.icon} /> {this.props.text}
      </div>
    );
  }
}

const styles: {[key: string]: React.CSSProperties} = {
  headerTitle: {
    visibility: "visible",
    animationDuration: "1.5s",
    animationDelay: "0s",
    animationName: "fadeInLeftBig"
  },
  intro: {
    visibility: "visible",
    animationDuration: "2.0s",
    animationDelay: "0s",
    animationName: "fadeInLeftBig"
  },
  headerImage: {
    visibility: "visible",
    animationDuration: "1.6s",
    animationDelay: "0s",
    animationName: "fadeInRightBig"
  },
  headerShape: {
    visibility: "visible",
    animationDuration: "1.6s",
    animationDelay: "0s",
    animationName: "fadeInRightBig"
  },
  platformAndroid: {
    visibility: "visible",
    animationDuration: "1.3s",
    animationDelay: "0s",
    animationName: "fadeInLeftBig"
  },
  platformIos: {
    visibility: "visible",
    animationDuration: "1.8s",
    animationDelay: "0s",
    animationName: "fadeInLeftBig"
  },
  platformWeb: {
    visibility: "visible",
    animationDuration: "2.5s",
    animationDelay: "0s",
    animationName: "fadeInLeftBig"
  }
}