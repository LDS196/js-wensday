const numbers = [1, 2, 3, 4, 5];

Array.prototype.square = function (){return this.map(el=> Math.pow(el,2))}
Array.prototype.cube = function (){return this.map(el=> Math.pow(el,3))}
Array.prototype.average = function (){return this.length?(this.reduce((sum,el)=>{return sum + el},0))/ this.length: NaN}
Array.prototype.sum = function (){return this.reduce((sum,el)=>{return sum + el},0)}
Array.prototype.even = function (){ return this.filter(el=> el % 2 === 0)}
Array.prototype.odd = function (){return this.filter(el=> el % 2 !== 0)}

console.log(numbers.odd())