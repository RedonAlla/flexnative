import React from "react";
import clsx from 'clsx';

import './styles.scss';
import DesktopShowcase from '@site/static/img/desktop-showcase.svg';
import TabletShowcase from '@site/static/img/tablet-showcase.svg';
import MobileShowcase from '@site/static/img/mobile-showcase.svg';
import SegmentedControl from "@site/src/components/SegmentedControl";

type DemoType = 'desktop' | 'tablet' | 'mobile';

type DemoStateProps = {
  demoType: DemoType;
}

type DemoProps = {
  demoType: DemoType;
  handleDemoChange: (value: DemoType) => void;
}

const DemoCase = {
  'desktop': DesktopShowcase,
  'tablet': TabletShowcase,
  'mobile': MobileShowcase,
}

type BtnPros = {
  icon: string;
  app: 'iOS' | 'Android';
  expoBuildId: string;
}

class DownloadBtn extends React.PureComponent<BtnPros, {}> {
  render() {
    return (
		<div class="dropdown dropdown--hoverable">
		  <div className={clsx("btn-download", this.props.icon)}>
			<span className={`icon-${this.props.icon}`}></span>
			<div className="text-content">
			  <small>Download</small>
			  <span>{this.props.app}</span>
			</div>
		  </div>
		  <ul class="dropdown__menu">
			<li>
			  <a class="dropdown__link"
				target="_blank"
				title="Dounload build from Github."
				href="https://github.com/RedonAlla/flexnative/tree/main/demo-app-builds"
			>Download from <strong>Git</strong></a>
			</li>
			<li>
			  <a class="dropdown__link"
				target="_blank"
				title="Dounload build from Expo."
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
    const Showcase = DemoCase[this.props.demoType];
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
          <Showcase title="Demo app" className="image" />
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
                  <DownloadBtn icon="apple" app="iOS" expoBuildId="28959397-b2a2-4361-a8fa-2c208bce439a" />
                  <DownloadBtn icon="android" app="Android" expoBuildId="90a88c8e-ae88-4b76-a1ad-4593886db8a6" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}