(function(global) {
var a = (function () { return 'a'; }).call(global),
b = (function (a){return a + 'b';}).call(global, a),
c = (function (a, b) {
    return a + b + 'c';
}).call(global, a, b);
})(this);