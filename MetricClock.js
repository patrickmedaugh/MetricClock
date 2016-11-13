var oneMetricSecond = .864;
var d = new Date(); // for now
var hoursSeconds = d.getHours() * 60 * 60
var minutesSeconds = d.getMinutes() * 60
var seconds = d.getSeconds(); // => 51

var currentSeconds = hoursSeconds + minutesSeconds + seconds;

var currentMetricSeconds = Math.round(currentSeconds / oneMetricSecond);

var metricTime = {
	seconds: currentMetricSeconds % 100,
	minutes: Math.floor(currentMetricSeconds % 1000 / 10),
	hours: currentMetricSeconds.toString()[0]
}

var currentMetricTime = metricTime.hours + ":" + metricTime.minutes + ":" + metricTime.seconds;

console.log(currentMetricTime)
