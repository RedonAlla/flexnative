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