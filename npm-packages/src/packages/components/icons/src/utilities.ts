type IcoMoonIcon = {
  properties: {
    name: string;
    code: number;
  };
};

type IcoMoonConfig = {
  icons: IcoMoonIcon[];
  preferences: {
    fontPref: {
      metadata: {
        fontFamily: string;
      };
    };
  };
};

export default function  (config: IcoMoonConfig): Record<string, string> {
  const glyphMap: Record<string, string> = {};

  config.icons.forEach((icon) => {
    icon.properties.name.split(/\s*,\s*/g).forEach((name) => {
      glyphMap[name] = String.fromCodePoint(icon.properties.code)
    });
  });

  return glyphMap;
}

const toHexZeroPad = (value: number, places: number) => value.toString(16).padStart(places, '0000');