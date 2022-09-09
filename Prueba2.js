var i = 1;
var j = i;
if (i == 1) {
    var i = 2;
}

function x() {
    i = 3;
    i +=3;
}
x();
console.log(i);

function x() {
    j+=3;
}
x();
console.log("valor de j?? " + j);
console.log (i===j);