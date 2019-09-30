"use strict";

require("core-js/modules/es6.promise");

require("core-js/modules/es6.object.to-string");

require("core-js/modules/es6.object.assign");

require("core-js/modules/es7.array.includes");

var array = [1, 2, 3, 4, 5, 6];
array.includes(function (item) {
  return item > 2;
});
array.flat();
Object.assign({}, {
  a: 1,
  b: 2
});
Array.isArray([]);
new Promise();