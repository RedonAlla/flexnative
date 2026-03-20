import React from 'react';

import BounceIcon from './BounceIcon';
import FadeIcon from './FadeIcon';
import GlitchIcon from './GlitchIcon';
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

const Components = {
  'bounce': BounceIcon,
  'fade': FadeIcon,
  'glitch': GlitchIcon,
  'heartbeat': HeartbeatIcon,
  'pulse': PulseIcon,
  'shake': ShakeIcon,
  'spin': Spinner,
  'wiggle': WiggleIcon,
}

function AnimatedIcon(props: AnimatedIconProps) {
  const { animation, ...rest } = props;
  const Component = Components[animation!]

  return <Component {...rest} />;
}

export default React.memo(AnimatedIcon);
