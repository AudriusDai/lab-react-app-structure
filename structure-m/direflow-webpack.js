const { webpackConfig } = require("direflow-scripts");

/**
 * Webpack configuration for Direflow Component
 * Additional webpack plugins / overrides can be provided here
 */
module.exports = (config, env) => ({
  ...webpackConfig(config, env, { filename: "myAppName.js" }),
  // Add your own webpack config here (optional)
});
