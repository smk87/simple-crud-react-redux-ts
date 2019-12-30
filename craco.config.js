const { whenTest } = require("@craco/craco");

module.exports = {
  babel: {
    plugins: [
      whenTest(() => ["styled-jsx/babel-test"], [
        "styled-jsx/babel",
        {
          plugins: ["styled-jsx-plugin-sass"]
        }
      ])
    ]
  }
};
