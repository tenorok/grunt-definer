(function(global) {
var a = (function () { return 'a'; }).call(global),
b = (function (a){return a + 'b';}).call(global, a),
c = (function (a, b) {
    return a + b + 'c';
}).call(global, a, b),
d = (function (
        a,
        b,
        c
    ){
        return a + b + 'c';
    }).call(global, a, b, c),
e = (function (d) { return d + 'e'; }).call(global, d),
f = (function () { return 'f'; }).call(global);
})(this);