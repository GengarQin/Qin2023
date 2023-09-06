var m = { n: 1 };
var n = m;
m.z = m = { n: 2 };
console.log(m.z);
console.log(n.z);
console.log(m);
console.log(n);
