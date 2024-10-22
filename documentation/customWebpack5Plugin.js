module.exports = function () {
  return {
    name: 'custom-docusaurus-plugin',
    // eslint-disable-next-line
    configureWebpack(config, isServer, utils) {
      return {
        resolve: {
          fallback: {
            crypto: require.resolve('crypto-browserify'),
            stream: require.resolve("stream-browserify"),
            vm: require.resolve("vm-browserify")
          },
        },
      };
    },
  };
};