import React from 'react';
import Layout from '@theme/Layout';

import HeroSection from '../components/Pages/HomePage/hero.section';
import DemoSection from '../components/Pages/HomePage/demo.section';
import WhatIsRaFramework from '../components/Pages/HomePage/what-is-flexnative';


export default class extends React.PureComponent {
  render() {
    return (
      <Layout
        title="FlexNative"
        description='FlexNative is a component library that enables developers to build universal design systems. It is built on top of React Native, allowing you to develop apps for Android, iOS, and the Web.'
      >
        <HeroSection />
        <WhatIsRaFramework />
        <DemoSection />
      </Layout>
    );
  }
}