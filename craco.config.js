// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");

module.exports = {
	webpack: {
		alias: {
			"@/assets": path.resolve(__dirname, "src/assets"),
			"@/components": path.resolve(__dirname, "src/components"),
			"@/fonts": path.resolve(__dirname, "src/fonts"),
			"@/pages": path.resolve(__dirname, "src/pages"),
			"@/hooks": path.resolve(__dirname, "src/hooks"),
			"@/styles": path.resolve(__dirname, "src/styles"),
			"@/utils": path.resolve(__dirname, "src/utils"),
			"@/types": path.resolve(__dirname, "src/types"),
			"@/recoil": path.resolve(__dirname, "src/recoil"),
		},
	},
};
