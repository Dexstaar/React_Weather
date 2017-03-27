'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.FETCH_WEATHER = undefined;
exports.fetchWeather = fetchWeather;

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var API_KEY = 'e9bc12ecab5890a7e7dd0d85d848fea9';
var ROOT_URL = 'http://api.openweathermap.org/data/2.5/forecast?appid=' + API_KEY;

var FETCH_WEATHER = exports.FETCH_WEATHER = 'FETCH_WEATHER';

function fetchWeather(city) {
    var url = ROOT_URL + '&q=' + city + ',us';
    var request = _axios2.default.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    };
}

//# sourceMappingURL=index-compiled.js.map