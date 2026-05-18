import {
  PartialStoryFn,
  Renderer,
  StoryContext,
} from "storybook/internal/types";

import { createIconSetFromIcoMoon, IconProvider } from "@flexnative/icons";
import config from "../../assets/fonts/icons-config.json";

type StoryProps = PartialStoryFn<Renderer, { [x: string]: any }>;
type ContextProps = StoryContext<Renderer, { [x: string]: any }>;

const icons = createIconSetFromIcoMoon(config);

const IconProviderDecorator = (Story: StoryProps, context: ContextProps) => {
  return (
    <IconProvider icons={icons}>
      <Story />
    </IconProvider>
  );
};

export default IconProviderDecorator;
