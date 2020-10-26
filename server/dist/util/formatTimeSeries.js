"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(timeSeries, dataKey) {
    var data = [];
    for (var key in timeSeries) {
        if (timeSeries.hasOwnProperty(key)) {
            var element = timeSeries[key];
            var time = new Date(key).getTime();
            var close_1 = parseFloat(element[dataKey]);
            data.push([time, close_1]);
        }
    }
    data.reverse();
    return data;
}
exports.default = default_1;
//# sourceMappingURL=formatTimeSeries.js.map