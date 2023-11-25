// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");

module.exports = {
	webpack: {
		alias: {
			"@/assets": path.resolve(__dirname, "src/Assets"),
			"@/components": path.resolve(__dirname, "src/Components"),
			"@/fonts": path.resolve(__dirname, "src/Fonts"),
			"@/pages": path.resolve(__dirname, "src/Pages"),
			"@/hooks": path.resolve(__dirname, "src/hooks"),
			"@/styles": path.resolve(__dirname, "src/Styles"),
			"@/utils": path.resolve(__dirname, "src/utils"),
			"@/types": path.resolve(__dirname, "src/types"),
			"@/recoil": path.resolve(__dirname, "src/recoil"),
		},
	},
};
