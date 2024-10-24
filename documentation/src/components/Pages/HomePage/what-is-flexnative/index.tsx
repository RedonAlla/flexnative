import React from "react";
import clsx from 'clsx';
import Link from "@docusaurus/Link";

import './styles.scss';
import { TOTAL_COMPONENTS } from "../../../../constants";


type ServiceProps = {
  wowDuration: string;
  wowDelay?: string;
  className: string;
  icon: string;
  title: string;
  description: string;
  link: string;
}

const wowDelayStart = 0.2;

const services: Array<ServiceProps> = [
  {
    title: "Cross-Platform",
    className: "services-color-1",
    wowDuration: "1.3s",
    icon: "icon-multi-device",
    description: "Consistent design across android, iOS, and web. Up to 11 general-purpose components designed to save development time.",
    link: "/flexnative/docs/getting-started",
  },
  {
    title: "Components",
    className: "services-color-2",
    wowDuration: "1.3s",
    icon: "icon-puzzle",
    description: `Up to ${TOTAL_COMPONENTS} general-purpose components designed to save development time while providing a smooth app experience.`,
    link: "/flexnative/docs/components",
  },
  {
    title: "Easy to use",
    className: "services-color-3",
    wowDuration: "1.3s",
    icon: "icon-lightning",
    description: "Built completely in TypeScript. Starting your react native app has never been easier. Supports Expo too!",
    link: "/flexnative/docs/getting-started",
  },
  {
    title: "Customizable",
    className: "services-color-4",
    wowDuration: "1.3s",
    icon: "icon-gridicons",
    description: "Easily style any of our components just the way you want.",
    link: "#",
  },
  {
    title: "Theming",
    className: "services-color-5",
    wowDuration: "1.3s",
    icon: "icon-color-palete",
    description: "Switch between Light and Dark themes in the runtime. Drive diversity by creating as many themes as needed without changing the source code of the components.",
    link: "/flexnative/docs/theme",
  }
] 

export default class extends React.PureComponent {
  render() {
    return (
      <section id="why" className="services-area">
        <div className="container">
          <div className="row">
            <div className="col col--7">
              <div className="section-title">
                <h3 className="title">What is <span>FlexNative</span></h3>
                <p className="text">
                  Whether you're building for the web, Android or iOS, FlexNative got you covered.
                  Fast-track your dev process with universal components. The framework contains a set of general-purpose UI components styled in a similar way.
                  The themes can be changed in the runtime without reloading the application.
                  This way, you may easily focus on business logic, while UI Kitten takes care of the visual appearance of your product.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            {
              services.map((service, index) => 
                <Service
                  key={index}
                  title={service.title}
                  className={service.className}
                  wowDuration={service.wowDuration}
                  wowDelay={`${wowDelayStart * index}s`}
                  icon={service.icon}
                  description={service.description}
                  link={service.link}
                />
              )
            }
          </div>
        </div>
      </section>
    );
  }
}

class Service extends React.PureComponent<ServiceProps> {
  render() {
    const { className, wowDuration, wowDelay, icon, title, link, description } = this.props;

    return (
      <div className="col">
        <div
          className={clsx('single-services', className, 'text--center', 'wow', 'fadeInUpBig')}
          data-wow-duration={wowDuration}
          data-wow-delay={wowDelay}
          style={{
            visibility: "visible",
            animationDuration: wowDuration,
            animationDelay: wowDelay,
            animationName: "fadeInUpBig"
          }}
        >
          <div className="services-icon align-items-center justify-content-center">
            <i className={icon} />
          </div>
          <div className="services-content">
            <h4 className="services-title">
              <Link to={link}>{title}</Link>
            </h4>
            <p className="text"> { description }</p>
          </div>
        </div>
      </div>
    );
  }
}