module.exports = function() {
	return require('./sentence')().split().reverse().join('');
};
