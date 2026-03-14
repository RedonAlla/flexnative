import React from "react";
import clsx from 'clsx';

import './styles.scss';
import SegmentedControl from "@site/src/components/SegmentedControl";

type DemoType = 'desktop' | 'tablet' | 'mobile';

type DemoStateProps = {
  demoType: DemoType;
}

type DemoProps = {
  demoType: DemoType;
  handleDemoChange: (value: DemoType) => void;
}

const demoConfig = {
  desktop: {
    containerStyle: {
      position: 'relative',
      width: '100%',
      maxWidth: '960px',
      margin: '0 auto',
      paddingBottom: '65%', // Aspect Ratio for the container
    },
    svgSrc: '/flexnative/img/desktop-showcase.svg',
    iframeStyle: {
      position: 'absolute',
      top: '4.5%',
      left: '2.5%',
      width: '95%',
      height: '82%',
      borderRadius: '10px',
      border: '0',
    },
  },
  tablet: {
    containerStyle: {
      position: 'relative',
      width: 657,
      height: 904,
      margin: '0 auto',
    },
    svgSrc: '/flexnative/img/tablet-showcase.svg',
    iframeStyle: {
      position: 'absolute',
      top: 36,
      left: 38,
      width: 581,
      height: 832,
      borderRadius: 24,
      border: 0,
    },
  },
  mobile: {
    containerStyle: {
      position: 'relative',
      width: '320px',
      height: '650px',
      margin: '0 auto',
    },
    svgSrc: '/flexnative/img/mobile-showcase.svg',
    iframeStyle: {
      position: 'absolute',
      top: 68,
      left: 17,
      width: 286,
      height: 565,
      borderRadius: 24,
      border: 0,
    },
  },
};

type BtnPros = {
  icon: string;
  app: 'iOS' | 'Android';
  expoBuildId: string;
}

class DownloadBtn extends React.PureComponent<BtnPros, {}> {
  render() {
    return (
		<div className="dropdown dropdown--hoverable">
		  <div className={clsx("btn-download", this.props.icon)}>
			<span className={`icon-${this.props.icon}`}></span>
			<div className="text-content">
			  <small>Download</small>
			  <span>{this.props.app}</span>
			</div>
		  </div>
		  <ul className="dropdown__menu">
			<li>
			  <a className="dropdown__link"
				target="_blank"
				title="Download build from Github."
				href="https://github.com/RedonAlla/flexnative/tree/main/demo-app-builds"
			>Download from <strong>Git</strong></a>
			</li>
			<li>
			  <a className="dropdown__link"
				target="_blank"
				title="Download build from Expo."
				href={`https://expo.dev/accounts/redonalla/projects/flexnative-demo/builds/${this.props.expoBuildId}`}
			 >Download from <strong>Expo</strong></a>
			</li>
		  </ul>
	  </div>
    );
  }
}

class DemoApp extends React.PureComponent<DemoProps> {
  render() {
    const { demoType } = this.props;
    const config = demoConfig[demoType];
    return (
      <>
        <div
          className="download-image wow fadeInRightBig"
          data-wow-duration="1.3s"
          data-wow-delay="0.2s"
          style={{
            visibility: "visible",
            animationDuration: "1.3s",
            animationDelay: "0.2s",
            animationName: "fadeInRightBig"
          }}
        >
          <div style={config.containerStyle} >
            {/* 1. The SVG is just the background frame */}
            <img
              src={config.svgSrc}
              alt={`${demoType} frame`}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
              }}
            />
            {/* 2. The iframe is an HTML element positioned on top of the SVG's screen area */}
            <iframe
              src="https://flexnative.netlify.app/"
              frameBorder="0"
              style={config.iframeStyle}
            />
          </div>
          <div className="download-shape-1" />
          <div className="download-shape-2">
            <img
              className="svg"
              src="/flexnative/img/download-shape.svg"
              alt="shape"
            />
          </div>
        </div>
        <SegmentedControl name="language"
          callback={this.props.handleDemoChange}
          controlRef={React.createRef()}
          segments={[
            {
              label: "Mobile",
              value: "mobile",
              ref: React.createRef()
            },
            {
              label: "Tablet",
              value: "tablet",
              ref: React.createRef()
            },
            {
              label: "Desktop",
              value: "desktop",
              ref: React.createRef()
            }
          ]}
        />
      </>
    );
  }
}

export default class extends React.PureComponent<{}, DemoStateProps> {
  constructor(props: {}) {
    super(props);

    this.state = {
      demoType: 'mobile'
    }

    this.handleDemoChange = this.handleDemoChange.bind(this);
  }

  public handleDemoChange(value: DemoType) {
    this.setState({demoType: value});
  }

  render() {
    return (
      <section id="download" className={clsx("download-area", this.state.demoType)}>
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col col--7">
              <DemoApp demoType={this.state.demoType} handleDemoChange={this.handleDemoChange} />
            </div>
            <div className="col col--5">
              <div
                className="download-content wow fadeInLeftBig"
                data-wow-duration="1.3s"
                data-wow-delay="0.5s"
                style={{
                  visibility: "visible",
                  animationDuration: "1.3s",
                  animationDelay: "0.5s",
                  animationName: "fadeInLeftBig"
                }}
              >
                <h3 className="download-title">Try Demo APP</h3>
                <p className="text">
                  Test Drive Demo APP on your device by downloading .apk or .ipa or with <a href="https://expo.dev/go">Expo Go</a>
                </p>
                
                <div className="btn-download-container">
                  <DownloadBtn icon="apple" app="iOS" expoBuildId="90a88c8e-ae88-4b76-a1ad-4593886db8a6" />
                  <DownloadBtn icon="android" app="Android" expoBuildId="28959397-b2a2-4361-a8fa-2c208bce439a" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}