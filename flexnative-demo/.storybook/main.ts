/** @type{import("@storybook/react-native").StorybookConfig} */
module.exports = {
  stories: ["./stories/**/*.stories.?(ts|tsx|js|jsx)"],
  addons: [
    "@storybook/addon-ondevice-controls",
    "@storybook/addon-ondevice-actions",
  ],
  docs: {
    //👇 See the table below for the list of supported options
    defaultName: "Documentation",
    docsMode: true,
  },
};
