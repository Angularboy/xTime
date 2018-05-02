!function (e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.xxtime = t()
}(this, function () {
    "use strict";

    /////////////////////////////////
    var add = function (x, y) {
        return x + y
    };
    var multiply = function (x, y) {
        return x * y
    };

    var flock_a = 4;
    var flock_b = 2;
    var flock_c = 0;

    console.log(multiply(flock_b, add(flock_a, flock_a)));
    //////////////////////////////////


    function init(n) {
        return n
    }

    var Time = function (n) {

        return Time.prototype.init(n)
    };

    Time.prototype.init = function (n) {

        // console.log(n);

        return function (n) {
            return init(n)
        }()
    };

    return function (n) {
        return new Time(n)
    };
});