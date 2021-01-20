const {
	createConfig,
	getDependencies,
} = require("eslint-config-galex/src/createConfig");
const {
	createJestOverride,
} = require("eslint-config-galex/src/overrides/jest");

const customJestLikeOverride = createJestOverride({
	...getDependencies(),
	files: ["testUtils/*.ts?(x)"],
});

module.exports = createConfig({
	overrides: [customJestLikeOverride],
});
