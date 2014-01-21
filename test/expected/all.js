var $ = function() { return 'jquery'; };
$.ui = function() { return 'jquery.ui'; };
$.plugin = function() { return 'jquery.plugin'; };
var _ = function() { return 'underscore'; };(function(global, undefined) {
var $ = global.$,
_ = global._,
a = (function ($, _) { return 'a'; }).call(global, $, _),
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
["$","_"].forEach(function(g) { delete global[g]; });
})(this);