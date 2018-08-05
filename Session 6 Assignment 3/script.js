/*Defines celsius temperature*/
var temperatureInCelsius = '40';
/*Converts celsius to farenheit*/
var celciusToFarenheit = ((temperatureInCelsius * 9) / 5) + 32;
/*Logs celcius and conversion to console*/
console.log ('Temperature of ' + temperatureInCelsius + ' celsuis, will be ' + celciusToFarenheit + ' farenheit.');

/*Defines farenheit temperature*/
var temperatureInFarenheit = '104';
/*Coverts farenheit to celsius*/
var farenheitToCelsius = ((temperatureInFarenheit - 32) * 5) /9;
/*Logs farenheit and conversion to console*/
console.log ('Temperature of ' + temperatureInFarenheit + ' farenheit, will be ' + farenheitToCelsius + ' celsuis.');
