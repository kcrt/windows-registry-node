if (process.platform == "win32") {
	module.exports = {
		registry: require('./lib/registry'),
		error: require('./lib/error'),
		types: require('./lib/types'),
		windef: require('./lib/windef'),
		Key: require('./lib/key'),
		utils: require('./lib/utils')
	};
} else {
	module.exports = void 0;
}
