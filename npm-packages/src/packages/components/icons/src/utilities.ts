type IcoMoonIcon = {
  properties: {
    name: string;
    code: number;
  };
};

type Extras = {
  name: string;
  codePoint: number;
}

type Glyph = {
  extras: Extras;
}

type IcoMoonConfig = {
  icons?: IcoMoonIcon[];
  glyphs?: Glyph[];
  preferences: {
    fontPref: {
      metadata: {
        fontFamily: string;
      };
    };
  };
};

export function createIconSetFromIcoMoon (config: IcoMoonConfig): Record<string, string> {
  const glyphMap: Record<string, string> = {};

  if(config.icons)
  {
    config.icons.forEach((icon) => {
      icon.properties.name.split(/\s*,\s*/g).forEach((name) => {
        glyphMap[name] = String.fromCodePoint(icon.properties.code)
      });
    
    });
  }

  if(config.glyphs)
  {
    config.glyphs.forEach((icon) => {
      icon.extras.name.split(/\s*,\s*/g).forEach((name) => {
        glyphMap[name] = String.fromCodePoint(icon.extras.codePoint)
      });
    
    });
  }

  return glyphMap;
}