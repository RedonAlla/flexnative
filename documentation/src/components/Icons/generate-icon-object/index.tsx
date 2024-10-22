import React from "react";
import CodeBlock from '@theme/CodeBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import SegmentedControl from "../../SegmentedControl";
import './styles.scss';


const toHexZeroPad = (value, places) => value.toString(16).padStart(places, '0000');

export default React.memo(() => {
  const [result, setResult] = React.useState("");
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [languageValue, setLanguageValue] = React.useState("Javascript");

  const handleChange = e => {
    const fileReader = new FileReader();
    fileReader.readAsText(e.target.files[0], "UTF-8");
    fileReader.onload = e => {
      setResult(e.target!.result! as string);
      setIsLoaded(true)
    };
  };
  
  return (
    <>
    <SegmentedControl name="language"
        callback={(val) => setLanguageValue(val)}
        controlRef={React.useRef()}
        segments={[
          {
            label: "Javascript",
            value: "Javascript",
            ref: React.useRef()
          },
          {
            label: "Typescript",
            value: "Typescript",
            ref: React.useRef()
          }
        ]}
      />
      <label htmlFor="images" className="drop-container">
        <span className="drop-title">Drop file here</span>
        or
        <input type="file"  id="images" accept=".json" onChange={handleChange} />
      </label>

      {(isLoaded && languageValue === 'Javascript') &&
        <CodeBlock language="js" title="/app.config.js" showLineNumbers>
        {
`/* You should remove first \\ from value ex: "sun": "\\u0053" */
module.exports = {
  extra: {
    /** Name of the icon to use. */
    icons: ${createIconsObject(result)}
  }
`}
      </CodeBlock>
      }
      {(isLoaded && languageValue === 'Typescript') &&
        <Tabs>
        <TabItem value="@flexnative/icons.d.ts" label="@flexnative/icons.d.ts" default>
        <CodeBlock language="ts" title="src/typings/@flexnative/icons/index.d.ts" showLineNumbers>
        {
`/* You should remove " from "string" */
declare module '@flexnative/icons' {

  /** Name of the icon to use. */
  interface IconName ${createIconNameInterface(result)}

  export interface IconProps extends TextProps {
    name: keyof IconName;
    size?: number;
    color?: ColorValue;
  }

  const Icon: React.MemoExoticComponent<(props: IconProps) => JSX.Element>;
  const Spinner: React.MemoExoticComponent<(props: IconProps) => JSX.Element>;

  export { Spinner };
  export default Icon;
}
`}
      </CodeBlock>
        </TabItem>
        <TabItem value="app.config.ts" label="app.config.ts">
        <CodeBlock language="ts" title="/app.config.ts" showLineNumbers>
        {
`/* You should remove first \\ from value ex: "sun": "\\u0053" */
import { ExpoConfig, ConfigContext } from 'expo/config';

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  extra: {
    icons: ${createIconsObject(result)}
  },
});
`}
      </CodeBlock>
        </TabItem>
      </Tabs>
      }
    </>
  );
});

function createIconsObject(result) {
  var resultObj = JSON.parse(result);
  var icons = {};
  resultObj.icons.map(t => {
    icons[t.properties.name] = '\\u' + toHexZeroPad(t.properties.code, 4)
  });
  return JSON.stringify(icons, null, 2)
}

function createIconNameInterface(result) {
  var resultObj = JSON.parse(result);
  var icons = {};
  resultObj.icons.map(t => {
    icons[t.properties.name] = 'string'
  });
  return JSON.stringify(icons, null, 2)
}