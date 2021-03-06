/**
 * This file has been autogenerated as it didn't exist or was made for an older incompatible version.
 * This file can be used for manual configuration will not be modified if the flowDefaults constant exists.
 */
const merge = require('webpack-merge');
const flowDefaults = require('./webpack.generated.js');

//--START imports from generated
 const fs = require('fs');
 const CopyWebpackPlugin = require('copy-webpack-plugin');
 const CompressionPlugin = require('compression-webpack-plugin');
 const {BabelMultiTargetPlugin} = require('webpack-babel-multi-target-plugin');

 const path = require('path');
 const baseDir = path.resolve(__dirname);
 // the folder of app resources (main.js and flow templates)
 const frontendFolder = require('path').resolve(__dirname, 'frontend');

 const fileNameOfTheFlowGeneratedMainEntryPoint = require('path').resolve(__dirname, 'target/frontend/generated-flow-imports.js');
 const mavenOutputFolderForFlowBundledFiles = require('path').resolve(__dirname, 'target/classes/META-INF/VAADIN');

 // public path for resources, must match Flow VAADIN_BUILD
 const build = 'build';
 // public path for resources, must match the request used in flow to get the /build/stats.json file
 const config = 'config';
 // folder for outputting index.js bundle, etc.
 const buildFolder = `${mavenOutputFolderForFlowBundledFiles}/${build}`;
 // folder for outputting stats.json
 const confFolder = `${mavenOutputFolderForFlowBundledFiles}/${config}`;
 // file which is used by flow to read templates for server `@Id` binding
 const statsFile = `${confFolder}/stats.json`;
 // make sure that build folder exists before outputting anything
 const mkdirp = require('mkdirp');
 mkdirp(buildFolder);
 mkdirp(confFolder);
 //-END IMPORT GNERATE

//const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');
module.exports = merge(flowDefaults, {


	entry: {
		"editor.worker": 'monaco-editor/esm/vs/editor/editor.worker.js',
		"json.worker": 'monaco-editor/esm/vs/language/json/json.worker',
		"css.worker": 'monaco-editor/esm/vs/language/css/css.worker',
		"html.worker": 'monaco-editor/esm/vs/language/html/html.worker',
		"ts.worker": 'monaco-editor/esm/vs/language/typescript/ts.worker',
	},
//output??
	module: {
		rules: [{
			test: /\.css$/,
			use: [ 'style-loader', 'css-loader' ]
		}]
	},

});

/**
 * This file can be used to configure the flow plugin defaults.
 * <code>
 *   // Add a custom plugin
 *   flowDefaults.plugins.push(new MyPlugin());
 *
 *   // Update the rules to also transpile `.mjs` files
 *   if (!flowDefaults.module.rules[0].test) {
 *     throw "Unexpected structure in generated webpack config";
 *   }
 *   flowDefaults.module.rules[0].test = /\.m?js$/
 *
 *   // Include a custom JS in the entry point in addition to generated-flow-imports.js
 *   if (typeof flowDefaults.entry.index != "string") {
 *     throw "Unexpected structure in generated webpack config";
 *   }
 *   flowDefaults.entry.index = [flowDefaults.entry.index, "myCustomFile.js"];
 * </code>
 * or add new configuration in the merge block.
 * <code>
 *   module.exports = merge(flowDefaults, {
 *     mode: 'development',
 *     devtool: 'inline-source-map'
 *   });
 * </code>
 */
