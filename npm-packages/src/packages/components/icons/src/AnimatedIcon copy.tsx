import React from 'react';

import BounceIcon from './BounceIcon';
import FadeIcon from './FadeIcon';
import GlitchIcon from './GlitchIcon';
import Icon from './Icon';
import HeartbeatIcon from './HeartbeatIcon';
import PulseIcon from './PulseIcon';
import ShakeIcon from './ShakeIcon';
import Spinner from './Spinner';
import WiggleIcon from './WiggleIcon';
import { IconProps } from './types';

export type AnimationType =
  | 'bounce'
  | 'fade'
  | 'glitch'
  | 'heartbeat'
  | 'pulse'
  | 'shake'
  | 'spin'
  | 'wiggle';

export type AnimatedIconProps = IconProps & {
  animation?: AnimationType;
  duration?: number;
  delay?: number;
  pulseColor?: string;
  amplitude?: number;
};

function AnimatedIcon(props: AnimatedIconProps) {
  const { animation, ...rest } = props;

  switch (animation) {
    case 'bounce':
      return <BounceIcon {...rest} />;
    case 'fade':
      return <FadeIcon {...rest} />;
    case 'glitch':
      return <GlitchIcon {...rest} />;
    case 'heartbeat':
      return <HeartbeatIcon {...rest} />;
    case 'pulse':
      return <PulseIcon {...rest} />;
    case 'shake':
      return <ShakeIcon {...rest} />;
    case 'spin':
      return <Spinner {...rest} />;
    case 'wiggle':
      return <WiggleIcon {...rest} />;
    default:
      return <Icon {...rest} />;
  }
}

export default React.memo(AnimatedIcon);
