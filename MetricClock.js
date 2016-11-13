var oneMetricSecond = .864;
var d = new Date();
var hoursSeconds = d.getHours() * 60 * 60
var minutesSeconds = d.getMinutes() * 60
var seconds = d.getSeconds();

var currentSeconds = hoursSeconds + minutesSeconds + seconds;

var currentMetricSeconds = Math.round(currentSeconds / oneMetricSecond);

var firstPlaceholder = currentMetricSeconds.toString().length - 2;

var secondPlaceholder = currentMetricSeconds.toString().length - 4;

var currentMetricTimeArray = currentMetricSeconds.toString().split("")

currentMetricTimeArray.splice(firstPlaceholder, 0, ":");
currentMetricTimeArray.splice(secondPlaceholder, 0, ":");

var currentMetricTime = currentMetricTimeArray.join("");

console.log(currentMetricTime)

