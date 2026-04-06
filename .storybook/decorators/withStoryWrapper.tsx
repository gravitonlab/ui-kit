import type { Decorator } from "@storybook/react-vite";
import { StoryWrapper } from "../../lib/components/layout/StoryWrapper/StoryWrapper";

export const withStoryWrapper: Decorator = (Story) => (
  <StoryWrapper>
    <Story />
  </StoryWrapper>
);
