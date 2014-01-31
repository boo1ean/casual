module.exports = function(from, to) {
	from = from || Number.MIN_VALUE;
	to   = to || Number.MAX_VALUE;

	return from + (to - from) * Math.random();
};
