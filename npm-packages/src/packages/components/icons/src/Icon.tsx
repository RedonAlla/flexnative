
import React from 'react';
import { Text } from 'react-native';

import { IconProps } from "./types";
import { styles } from './styles';
import { useIconCommon } from './useIconCommon';


function Icon(props: IconProps) {
  const {
    name,
    size,
    color,
    borderRadius,
    backgroundColor,
    style,
    ...rest
  } = props;

  const common = useIconCommon(props);

  if (!common) {
    return null;
  }

  return(
    <Text numberOfLines={1}
        adjustsFontSizeToFit
        style={[
          styles.core,
          common.style,
          style
        ]}
        {...rest}
    >
      {common.icon}
    </Text>
  );
}

export default React.memo(Icon);