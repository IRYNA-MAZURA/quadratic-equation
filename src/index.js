module.exports = function solveEquation(equation) {

    var array = equation.split(' ');

    var a = +array[0];

    var b = +[array[3], array[4]].join('');

    var c = +[array[7], array[8]].join('');

    var D = Math.sqrt(Math.pow( b, 2 ) - 4*a*c);

    var x1 = (-b + D)/(2*a);

    var x2 = (-b - D)/(2*a);

    var ARRAY = [Math.round(x1), Math.round(x2)];

    function compare(a, b) {
        if (a > b) {
            return 1;
        }
        if (a < b) {
            return -1;
        }

        return 0;
    }

    return ARRAY.sort(compare);
}