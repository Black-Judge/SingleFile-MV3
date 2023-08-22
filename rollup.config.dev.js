/* global require */

const resolve = require("@rollup/plugin-node-resolve");
const { terser } = require("rollup-plugin-terser");

const PLUGINS = [resolve({ moduleDirectories: [".."] })];
const EXTERNAL = ["single-file-core"];

export default [{
	input: ["single-file-core/single-file.js"],
	output: [{
		file: "lib/single-file.js",
		format: "umd",
		name: "singlefile",
		plugins: []
	}],
	plugins: PLUGINS,
	external: EXTERNAL
}, {
	input: ["single-file-core/single-file-frames.js"],
	output: [{
		file: "lib/single-file-frames.js",
		format: "umd",
		name: "singlefile",
		plugins: []
	}],
	plugins: PLUGINS,
	external: EXTERNAL
}, {
	input: ["single-file-core/single-file-bootstrap.js"],
	output: [{
		file: "lib/single-file-bootstrap.js",
		format: "umd",
		name: "singlefileBootstrap",
		plugins: []
	}],
	plugins: PLUGINS,
	external: EXTERNAL
}, {
	input: ["single-file-core/single-file-hooks-frames.js"],
	output: [{
		file: "lib/single-file-hooks-frames.js",
		format: "iife",
		plugins: []
	}],
	plugins: PLUGINS,
	external: EXTERNAL
}, {
	input: ["single-file-core/single-file-infobar.js"],
	output: [{
		file: "lib/single-file-infobar.js",
		format: "iife",
		plugins: [terser()]
	}],
	plugins: PLUGINS,
	external: EXTERNAL
}, {
	input: ["src/core/content/content-bootstrap.js"],
	output: [{
		file: "lib/single-file-extension-bootstrap.js",
		format: "iife",
		plugins: []
	}]
}, {
	input: ["src/core/content/content-frames.js"],
	output: [{
		file: "lib/single-file-extension-frames.js",
		format: "iife",
		plugins: []
	}]
}, {
	input: ["src/index.js"],
	output: [{
		file: "lib/single-file-extension-core.js",
		format: "umd",
		name: "extension",
		plugins: []
	}]
}, {
	input: ["src/core/content/content.js"],
	output: [{
		file: "lib/single-file-extension.js",
		format: "iife",
		plugins: []
	}]
}, {
	input: ["src/ui/content/content-ui-editor-init-web.js"],
	output: [{
		file: "lib/single-file-extension-editor-init.js",
		format: "iife",
		plugins: []
	}]
}, {
	input: ["src/ui/content/content-ui-editor-web.js"],
	output: [{
		file: "lib/single-file-extension-editor.js",
		format: "iife",
		plugins: []
	}]
}, {
	input: ["single-file-core/single-file-editor-helper.js"],
	output: [{
		file: "lib/single-file-extension-editor-helper.js",
		format: "umd",
		name: "singlefile",
		plugins: []
	}],
	plugins: PLUGINS,
	external: EXTERNAL
}, {
	input: ["src/lib/single-file/browser-polyfill/chrome-browser-polyfill.js"],
	output: [{
		file: "lib/chrome-browser-polyfill.js",
		format: "iife",
		plugins: []
	}]
}, {
	input: ["src/core/bg/index.js"],
	output: [{
		file: "lib/single-file-extension-background.js",
		format: "iife",
		plugins: []
	}]
}, {
	input: ["src/core/bg/offscreen-document.js"],
	output: [{
		file: "lib/single-file-extension-offscreen-document.js",
		format: "iife",
		plugins: []
	}]
}, {
	input: ["src/lib/single-file/background.js"],
	output: [{
		file: "lib/single-file-background.js",
		format: "iife",
		plugins: []
	}]
}];