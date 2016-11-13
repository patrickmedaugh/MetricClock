var oneMetricSecond = .864;
var d = new Date(); // for now
var hoursSeconds = d.getHours() * 60 * 60
var minutesSeconds = d.getMinutes() * 60
var seconds = d.getSeconds(); // => 51

var currentSeconds = hoursSeconds + minutesSeconds + seconds;

var currentMetricSeconds = Math.round(currentSeconds / oneMetricSecond);

var metricTime = {
	seconds: function () {
		var seconds = currentMetricSeconds % 100;
		if (seconds < 10) {
			return "0" + seconds;
		}
		return seconds;
	},
	minutes: function () {
		var minutes = Math.floor(currentMetricSeconds % 10000 / 100);
		if (minutes < 10) {
			return "0" + minutes;
		}
		return minutes;
	},
	hours: Math.floor(currentMetricSeconds / 10000)
};

var currentMetricTime = metricTime.hours + ":" + metricTime.minutes() + ":" + metricTime.seconds();


console.log(currentMetricTime)
